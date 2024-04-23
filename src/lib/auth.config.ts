import { NextRequest } from 'next/server';
import { Session } from 'next-auth';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { JWT } from '@auth/core/jwt';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { AdapterUser } from '@auth/core/adapters';

export interface ProjectSession extends Session {
    id: string;
}

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }: { token: JWT; user: AdapterUser }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({
            session,
            token,
        }: {
            session: Session;
            token: JWT;
        }): Promise<ProjectSession> {
            return { ...session, id: token.id };
        },
        authorized({ auth, request }: { auth: Session | null; request: NextRequest }) {
            const user = auth as ProjectSession;
            const isOnLoginPage = request.nextUrl.pathname.startsWith('/login');
            const isHomePage = request.nextUrl.pathname === '/';

            if (isHomePage && !user) {
                return false;
            }
            if (isOnLoginPage && user) {
                return Response.redirect(new URL('/', request.nextUrl));
            }
            return true;
        },
    },
};
