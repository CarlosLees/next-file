import { SystemHardwareInfo, SystemInfoResponse } from '@/types/model';
import { getApi } from '@/lib/action';

const Table = ({ title, description }: { title: string; description: string }) => {
    return (
        <div className="flex items-start gap-2 flex-row">
            <h1 className="text-base font-medium text-sky-1 lg:text-xl min-w-32">{title}:</h1>
            <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
                {description}
            </h1>
        </div>
    );
};

const Personal = async () => {
    const deviceInfo = (await getApi('/system')) as SystemInfoResponse;
    const hardwareInfo = (await getApi('/system/info')) as SystemHardwareInfo;

    return (
        <section className="flex size-full flex-col gap-10 text-white">
            <h1 className="text-xl font-bold lg:text-3xl">配置信息</h1>
            <div className="flex gap-2 max-sm:flex-col">
                <div className="flex flex-1 flex-col gap-8 xl:max-w-[900px] border-gray-500 border-2 p-2 rounded-2xl">
                    {deviceInfo && (
                        <>
                            <Table title="真实姓名" description={deviceInfo.realName} />
                            <Table title="用户名" description={deviceInfo.username} />
                            <Table title="设备名称" description={deviceInfo.deviceName} />
                            <Table title="本机名称" description={deviceInfo.hostname} />
                            <Table title="设备平台" description={deviceInfo.platform} />
                            <Table title="版本" description={deviceInfo.distro} />
                            <Table title="系统名称" description={deviceInfo.desktopEnv} />
                            <Table title="CpuLength" description={hardwareInfo.cpuLength} />
                            <Table title="系统架构" description={deviceInfo.arch} />

                            <Table title="TotalMemory" description={hardwareInfo.totalMemory} />
                            <Table title="UsedMemory" description={hardwareInfo.usedMemory} />
                            <Table title="totalSwap" description={hardwareInfo.totalSwap} />
                            <Table title="usedSwap" description={hardwareInfo.usedSwap} />
                        </>
                    )}
                </div>
                <div className="flex-1 w-full">
                    {hardwareInfo &&
                        hardwareInfo.disks.length !== 0 &&
                        hardwareInfo.disks.map((disk, index) => {
                            return (
                                <div
                                    className="flex flex-col items-start gap-3 mb-5 border-2 border-gray-500 p-2 rounded-2xl"
                                    key={disk.mountPoint}
                                >
                                    <Table title="硬盘类型" description={disk.kind} />
                                    <Table title="硬盘名称" description={disk.name} />
                                    <Table title="可用空间" description={disk.availableSpace} />
                                    <Table title="硬盘格式" description={disk.fileSystem} />
                                    <Table title="挂载点" description={disk.mountPoint} />
                                    <Table title="总容量" description={disk.totalSpace} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
};

export default Personal;
