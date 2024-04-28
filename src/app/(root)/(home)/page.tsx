import TypeList from '@/components/typeList/TypeList';
import { Button } from '@/components/ui/button';
import { logout } from '@/lib/action';
import SystemCard from '@/components/systemCard/SystemCard';

const Home = async () => {
    const now = new Date();
    const time = now.toLocaleTimeString('chinese', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Shanghai',
    });
    const date = new Intl.DateTimeFormat('chinese', {
        dateStyle: 'full',
        timeZone: 'Asia/Shanghai',
    }).format(now);

    return (
        <section className="flex size-full flex-col gap-10 text-white">
            <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
                <div className="mb-5 bg-dark-1 flex items-center h-full justify-between max-md:p-5 max-lg:p-8 lg:p-11">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
                        <p className="text-lg font-medium text-sky-300 lg:text-2xl">{date}</p>
                    </div>
                    <SystemCard />
                </div>
            </div>
            <TypeList />
            <form action={logout}>
                <Button>logout</Button>
            </form>
        </section>
    );
};

export default Home;
