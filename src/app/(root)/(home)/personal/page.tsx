import { systemApi } from '@/lib/action';
import { SystemInfoResponse } from '@/types/model';

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
    const deviceInfo = (await systemApi('system')) as SystemInfoResponse;

    return (
        <section className="flex size-full flex-col gap-10 text-white">
            <h1 className="text-xl font-bold lg:text-3xl">配置信息</h1>
            <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
                {deviceInfo && (
                    <>
                        <Table title="真实姓名" description={deviceInfo.realName} />
                        <Table title="用户名" description={deviceInfo.username} />
                        <Table title="设备名称" description={deviceInfo.deviceName} />
                        <Table title="本机名称" description={deviceInfo.hostname} />
                        <Table title="设备平台" description={deviceInfo.platform} />
                        <Table title="版本" description={deviceInfo.distro} />
                        <Table title="本地桌面" description={deviceInfo.desktopEnv} />
                        <Table title="系统架构" description={deviceInfo.arch} />
                    </>
                )}
            </div>
        </section>
    );
};

export default Personal;
