'use server';

import { signIn, signOut } from '@/lib/auth';

export const login = async (pre: any, form: FormData) => {
    const { username, password } = Object.fromEntries(form);
    try {
        await signIn('credentials', {
            username: username as string,
            password: password as string,
        });
        return { success: 'login success' };
    } catch (error) {
        if ((error as Error).message.includes('CredentialsSignin')) {
            return { error: 'Invalid username or password' };
        }
        throw error;
    }
};

export const logout = async () => {
    await signOut();
};
