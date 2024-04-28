'use server';

import { signIn, signOut } from '@/lib/auth';

interface ResponseData<T> {
    code: number;
    msg: string;
    data: T;
}

const buildCommonHeader = () => {
    return {
        'Access-Control-Allow-Origin': '*',
    };
};

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

export const systemApi = async (url?: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
        headers: {
            ...buildCommonHeader(),
        },
        cache: 'no-cache',
    });
    const date: ResponseData<any> = await response.json();
    if (date && date.code === 200) {
        return date.data;
    }
    return null;
};
