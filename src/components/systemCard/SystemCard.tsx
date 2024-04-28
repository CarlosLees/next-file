import { CpuIcon, HardDriveIcon, MemoryStickIcon } from 'lucide-react';

import { systemApi } from '@/lib/action';
import { SystemHardwareInfo } from '@/types/model';

const SystemCard = async () => {
    const data = (await systemApi('system/info')) as SystemHardwareInfo;

    return (
        <section className="bg-dark-1 rounded-lg shadow-md dark:bg-gray-800 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center gap-2">
                    <MemoryStickIcon className="h-6 w-6 mr-2 text-primary text-red-500" />
                    <div>
                        <h3 className="font-medium">totalMemory</h3>
                        <p className="text-gray-500 dark:text-gray-400">{`${data.totalMemory}G`}</p>
                        <h3 className="font-medium">usedMemory</h3>
                        <p className="text-gray-500 dark:text-gray-400">{`${data.usedMemory}G`}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <CpuIcon className="h-6 w-6 mr-2 text-primary text-red-500" />
                    <div>
                        <h3 className="font-medium">totalSwap</h3>
                        <p className="text-gray-500 dark:text-gray-400">{`${data.totalSwap}G`}</p>
                        <h3 className="font-medium">usedSwap</h3>
                        <p className="text-gray-500 dark:text-gray-400">{`${data.usedSwap}G`}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <HardDriveIcon className="h-6 w-6 mr-2 text-primary text-red-500" />
                    <div>
                        <h3 className="font-medium">systemName</h3>
                        <p className="text-gray-500 dark:text-gray-400">{`${data.systemName}`}</p>
                        <h3 className="font-medium">cpuLength</h3>
                        <p className="text-gray-500 dark:text-gray-400">{`${data.cpuLength}`}</p>
                    </div>
                </div>

                {/*    <div className="flex items-center"> */}
                {/*        <MemoryStickIcon className="h-6 w-6 mr-2 text-primary" /> */}
                {/*        <div> */}
                {/*            <h3 className="font-medium">RAM</h3> */}
                {/*            <p className="text-gray-500 dark:text-gray-400">32GB DDR4 3200MHz</p> */}
                {/*        </div> */}
                {/*    </div> */}
                {/*    <div className="flex items-center"> */}
                {/*        <HardDriveIcon className="h-6 w-6 mr-2 text-primary" /> */}
                {/*        <div> */}
                {/*            <h3 className="font-medium">Storage</h3> */}
                {/*            <p className="text-gray-500 dark:text-gray-400"> */}
                {/*                1TB M.2 NVMe SSD, 2TB HDD */}
                {/*            </p> */}
                {/*        </div> */}
                {/*    </div> */}
                {/*    <div className="flex items-center"> */}
                {/*        <CpuIcon className="h-6 w-6 mr-2 text-primary" /> */}
                {/*        <div> */}
                {/*            <h3 className="font-medium">Graphics Card</h3> */}
                {/*            <p className="text-gray-500 dark:text-gray-400">NVIDIA GeForce RTX 3080</p> */}
                {/*        </div> */}
                {/*    </div> */}
            </div>
        </section>
    );
};

export default SystemCard;
