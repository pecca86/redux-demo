"use server"

import { format } from "path";
import { auth, signIn, signOut } from "./auth";
import { supabase } from './supabase';
import { revalidatePath } from "next/cache";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function signInAction() {
  // with multiple providers, you can get the provider dynamically by looping over them
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}

export async function updateProfile(formData: any) {
  const session = await auth();
  if (!session) {
    throw new Error("You need to be signed in to update your profile");
  }

  const national_id = formData.get("national_id");
  const x = formData.get("nationality");
  const [nationality, flag] = x.split("%");

  if (national_id.length < 6 || national_id.length > 12) {
    throw new Error("National ID number should be between 6 and 12 characters");
  }

  const updateData = { nationality, flag, national_id };
  const myid = session?.user?.guestId as User;

  const { data, error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', myid)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Guest could not be updated');
  }

  // manually revalidate the cache to update the UI
  revalidatePath("/account/profile");

  return data;
}

export async function deleteReservation(bookingId: number) {
  const session = await auth();
  const userId = session?.user?.guestId as number;

  const userBookings = await getBookings(userId);

  if (!userBookings.find((booking: any) => booking.id === bookingId)) {
    throw new Error('Booking does not exist or does not belong to this user');
  }

  const { data, error } = await supabase.from('bookings').delete().eq('id', bookingId);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted');
  }

  revalidatePath(`/account/reservations`);
  return data;

}

export async function getReservation(bookingId: string | undefined) {
  const { data, error, count } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', Number(bookingId))
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not get loaded');
  }

  return data;
}

export async function updateReservation(bookingData: Booking) {
  //
  const id = bookingData.id;

  const updatedFields = {
    id: bookingData.id,
    check_in: bookingData.start_date,
    check_out: bookingData.end_date,
  }

  const { data, error } = await supabase
    .from('bookings')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be updated');
  }

  revalidatePath(`/account/reservations`);
  revalidatePath(`/account/reservations/edit/${id}`);
  redirect(`/account/reservations`);
  // return data;
}

export async function createReservation(bookingData: Booking, formData:any) {
  console.log("Booking: ", bookingData);
  console.log("Form: ", formData);

  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const newBooking = {
    ...bookingData,
    guest_id: session.user.guestId,
    number_of_guests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    paid: false,
    breakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) throw new Error("Booking could not be created");

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect("/cabins");

}
