import Link from 'next/link';
import Image from 'next/image';

import { SystemHardwareInfo } from '@/types/model';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getApi } from '@/lib/action';

const TempTable = ({ content }: { content: string }) => {
    return (
        <div className="flex flex-row gap-2 items-center px-2">
            <h1 className="truncate text-orange-400 text-base text-[12px]">{content}</h1>
        </div>
    );
};

const Navbar = async () => {
    const data = (await getApi('/system/info')) as SystemHardwareInfo;

    return (
        <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
            <Link href="/" className="flex items-center gap-4">
                <Image
                    src="/icons/logo.png"
                    alt="Zoom Project"
                    width={40}
                    height={40}
                    className="max-sm:size-10 bg-blue-300 rounded-lg"
                />
                <p className="text-[26px] font-extrabold text-white max-sm:hidden">File Manager</p>
            </Link>
            <div className="flex items-center gap-4">
                <div className="flex gap-2">
                    {data.temperatures &&
                        data.temperatures.length !== 0 &&
                        data.temperatures.map((temp) => {
                            return (
                                <div
                                    key={temp.label}
                                    className="flex flex-col border border-gray-500 rounded-xl justify-center items-center"
                                >
                                    <TempTable content={temp.label} />
                                    <TempTable
                                        content={`${temp.temperature.toString().split('.')[0]}\u00B0C`}
                                    />
                                </div>
                            );
                        })}
                </div>
                <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
