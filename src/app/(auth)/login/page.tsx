'use client';

import { useFormState } from 'react-dom';

import Link from 'next/link';

import { login } from '@/lib/action';

const LoginPage = () => {
    const [state, loginFormAction] = useFormState(login, undefined);

    return (
        <div className="justify-center items-center flex flex-col gap-10 h-screen bg-black">
            <h1 className="text-center text-3xl font-bold text-white">Welcome to File Manage</h1>
            <form className="flex flex-col gap-4 w-1/4" action={loginFormAction}>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    className="p-4 rounded-[12px] outline-none
                            bg-blend-soft-light text-black font-bold text-[16px]"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="p-4 rounded-[12px] outline-none
                            bg-blend-soft-light text-black font-bold text-[16px]"
                />
                <button
                    className="p-4 bg-blue-600 rounded-[12px] border-none text-white
                        font-bold cursor-pointer text-[16px]"
                >
                    Login
                </button>
            </form>
            {state?.error}
            <p className="link">
                <Link href="/">
                    Not have an account? <b>Register</b>
                </Link>
            </p>
        </div>
    );
};

export default LoginPage;
