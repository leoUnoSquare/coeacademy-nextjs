import NextAuth, { AuthOptions } from "next-auth";
export const runtime = 'edge';

import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions as AuthOptions);

export { handler as GET, handler as POST };
