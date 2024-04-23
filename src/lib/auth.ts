import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { authConfig } from '@/lib/auth.config';

const login = async (credentials: Record<string, unknown>) => {
    try {
        // const isPasswordCorrect = await bcrypt.compare(
        //     credentials.password as string,
        //     user.password,
        // );
        console.log('credentials：', credentials);
        const user: {
            password: string;
            img: string;
            id: string;
            isAdmin: boolean;
            email: string;
            name: string;
        } = {
            name: credentials.username as string,
            id: 'credentialsId',
            email: '',
            password: '',
            img: '',
            isAdmin: false,
        };
        return user;
    } catch (err) {
        throw new Error('Failed to login!');
    }
};

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: 'username', type: 'text', placeholder: 'username' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    return await login(credentials);
                } catch (error) {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        ...authConfig.callbacks,
    },
});
