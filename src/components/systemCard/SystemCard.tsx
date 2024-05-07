import { systemApi } from '@/lib/action';
import { SystemHardwareInfo } from '@/types/model';

const Table = ({
    firstTitle,
    secondTitle,
    firstDescription,
    secondDescription,
}: {
    firstTitle: string;
    secondTitle: string;
    firstDescription: string;
    secondDescription: string;
}) => {
    return (
        <>
            <div className="flex items-center gap-3 border-gray-400 border p-8 rounded-3xl">
                <div className="flex gap-3 flex-col items-center">
                    <h3 className="font-bold text-2xl max-md:text-xl">{firstTitle}</h3>
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
                />
                <Table
                    firstTitle="TotalSwap"
                    secondTitle="UsedSwap"
                    firstDescription={`${data.totalSwap}G`}
                    secondDescription={`${data.usedSwap}G`}
                />
                <Table
                    firstTitle="SystemName"
                    secondTitle="CpuLength"
                    firstDescription={`${data.systemName}`}
                    secondDescription={`${data.cpuLength}`}
                />
            </div>
        </section>
    );
};

export default SystemCard;
