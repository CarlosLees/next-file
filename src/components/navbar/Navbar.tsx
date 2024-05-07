import Link from 'next/link';
import Image from 'next/image';

import { systemApi } from '@/lib/action';
import { SystemHardwareInfo } from '@/types/model';

const Navbar = async () => {
    const data = (await systemApi('system/info')) as SystemHardwareInfo;

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
            <div className="flex">
                <div className="flex gap-2">
                    {data.temperatures &&
                        data.temperatures.length !== 0 &&
                        data.temperatures.map((temp) => {
                            return <div key={temp.label}>{temp.maxTemperature}</div>;
                        })}
                </div>
                <div>温度</div>
            </div>
        </nav>
    );
};

export default Navbar;
