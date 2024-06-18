import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import { getGuest, createGuest } from "./data-service";


const authConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        authorized({auth, request}: {auth: any, request: any}) {
            // if user exists, return true
            return !!auth?.user;
        },
        async signIn({user, account, profile}: {user: any, account: any, profile: any}) {
            try {
                const guest = await getGuest(user.email);

                if (!guest) {
                    await createGuest({
                        email: user.email,
                        full_name: user.name,
                    });
                }

                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        },
        async session({session, user}: {session: any, user: any}) {
            const guest = await getGuest(session?.user?.email);
            console.log('user ', user)
            console.log('guest ', guest);
            console.log('sessio ', session);
            session.user.guestId = guest.id;
            return session;
        }
    },
    pages: {
        signIn: "/login",
    },
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authConfig as any)