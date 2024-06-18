"use server"
import { signIn } from "./auth";

export async function signInAction() {
    // with multiple providers, you can get the provider dynamically by looping over them
    await signIn("google", {
        redirectTo: "/account",
    });
}