import { CpuIcon, HardDriveIcon, MemoryStickIcon } from 'lucide-react';

import { ReactNode } from 'react';

import { systemApi } from '@/lib/action';
import { SystemHardwareInfo } from '@/types/model';

const Table = ({
    firstTitle,
    secondTitle,
    firstDescription,
    secondDescription,
    icon,
}: {
    firstTitle: string;
    secondTitle: string;
    firstDescription: string;
    secondDescription: string;
    icon: ReactNode;
}) => {
    return (
        <>
            <div className="flex items-center gap-3 border-gray-400 border p-8 rounded-3xl">
                {icon}
                <div className="flex gap-3 flex-col items-center">
                    <h3 className="font-bold text-2xl">{firstTitle}</h3>
                    <p className="text-blue-400 text-xl">{firstDescription}</p>
                    <h3 className="font-bold text-2xl">{secondTitle}</h3>
                    <p className="text-blue-400 text-xl">{secondDescription}</p>
                </div>
            </div>
        </>
    );
};

const SystemCard = async () => {
    const data = (await systemApi('system/info')) as SystemHardwareInfo;

    return (
        <section className="bg-dark-1 shadow-md p-6">
            <div className="flex gap-6">
                <Table
                    firstTitle="TotalMemory"
                    secondTitle="UsedMemory"
                    firstDescription={`${data.totalMemory}G`}
                    secondDescription={`${data.usedMemory}G`}
                    icon={
                        <MemoryStickIcon className="h-8 w-8 mr-2 text-primary text-red-500 max-sm:hidden" />
                    }
                />
                <Table
                    firstTitle="TotalSwap"
                    secondTitle="UsedSwap"
                    firstDescription={`${data.totalSwap}G`}
                    secondDescription={`${data.usedSwap}G`}
                    icon={<CpuIcon className="h-8 w-8 mr-2 text-primary text-red-500" />}
                />
                <Table
                    firstTitle="SystemName"
                    secondTitle="CpuLength"
                    firstDescription={`${data.systemName}`}
                    secondDescription={`${data.cpuLength}`}
                    icon={<HardDriveIcon className="h-8 w-8 mr-2 text-primary text-red-500" />}
                />
            </div>
        </section>
    );
};

export default SystemCard;
