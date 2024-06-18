import NextAuth from "next-auth";
import Google from "next-auth/providers/google"

// export const { handlers, auth, signIn, signOut } = NextAuth({
//     providers: [
//         Google({
//             clientId: process.env.GOOGLE_ID,
//             clientSecret: process.env.GOOGLE_SECRET,
//             authorization: {
//                 params: {
//                     prompt: "consent",
//                     access_type: "offline",
//                     response_type: "code",
//                 },
//             },
//         }),
//     ],
// })

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
        }
    },
    pages: {
        signIn: "/login",
    },
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authConfig)