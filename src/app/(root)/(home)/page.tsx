'use client';

import { useEffect, useState } from 'react';

import TypeList from '@/components/typeList/TypeList';
import { useGetRequest } from '@/hooks/useRequest';
import { Button } from '@/components/ui/button';
import { logout } from '@/lib/action';

const Home = () => {
    const [time, setTime] = useState<string>('');
    const [date, setDate] = useState<string>('');

    useEffect(() => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('chinese', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Asia/Shanghai',
        });
        const dateString = new Intl.DateTimeFormat('chinese', {
            dateStyle: 'full',
            timeZone: 'Asia/Shanghai',
        }).format(now);
        setTime(timeString);
        setDate(dateString);
    }, [time, date]);

    const { response } = useGetRequest('system');

    return (
        <section className="flex size-full flex-col gap-10 text-white">
            <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
                <div className="mb-5 flex h-full flex-col justify-between max-md:px-5 max-lg:p-8 lg:p-11">
                    <h2 className="glassMorphism max-x-[270px] rounded py-2 text-center text-base font-normal">
                        Upcoming Meeting at: 12:30 PM
                    </h2>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
                        <p className="text-lg font-medium text-sky-300 lg:text-2xl">{date}</p>
                    </div>
                </div>
            </div>
            <TypeList />
            <div className="text-white">{response && JSON.stringify(response.data)}</div>
            <form action={logout}>
                <Button>logout</Button>
            </form>
        </section>
    );
};
export default Home;
