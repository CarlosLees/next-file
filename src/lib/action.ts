'use server';

import QueryString from 'qs';

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

export const getApi = async (url?: string, params?: Record<string, any>) => {
    let urlRet = url;
    if (params) {
        urlRet = `${url}?${QueryString.stringify(params)}`;
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${urlRet}`, {
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
