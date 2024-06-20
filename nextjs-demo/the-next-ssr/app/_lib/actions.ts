"use server"

import { format } from "path";
import { auth, signIn, signOut } from "./auth";
import { supabase } from './supabase';
import { revalidatePath } from "next/cache";
import { getBookings } from "./data-service";

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

export async function deleteReservation(bookingId:number) {
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