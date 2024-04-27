import { CpuIcon } from 'lucide-react';

const SystemCard = () => {
    return (
        <section className="bg-dark-1 rounded-lg shadow-md dark:bg-gray-800 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center gap-2">
                    <CpuIcon className="h-6 w-6 mr-2 text-primary text-blue-300" />
                    <div>
                        <h3 className="font-medium">Processor</h3>
                        <p className="text-gray-500 dark:text-gray-400">Intel Core i7-11700K</p>
                        <h3 className="font-medium">Processor</h3>
                        <p className="text-gray-500 dark:text-gray-400">Intel Core i7-11700K</p>
                        <h3 className="font-medium">Processor</h3>
                        <p className="text-gray-500 dark:text-gray-400">Intel Core i7-11700K</p>
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
