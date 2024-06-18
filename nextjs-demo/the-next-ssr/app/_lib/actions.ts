"use server"
import { signIn, signOut } from "./auth";

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