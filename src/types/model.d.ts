export interface SystemInfoResponse {
    realName: string;
    username: string;
    deviceName: string;
    hostname: string;
    platform: string;
    distro: string;
    desktopEnv: string;
    arch: string;
}

export interface SystemHardwareInfo {
    totalMemory: string;
    usedMemory: string;
    totalSwap: string;
    usedSwap: string;
    systemName: string;
    cpuLength: string;
    disks: SystemDisk[];
    temperatures: SystemTemperature[];
}

interface SystemDisk {
    name: string;
    availableSpace: string;
    totalSpace: string;
    fileSystem: string;
    kind: string;
    mountPoint: string;
}

interface SystemTemperature {
    temperature: string;
    maxTemperature: string;
    label: string;
}

export interface HomePathFileResponse {
    fileType: number;
    fileName: string;
}

export interface HomePageFolders {
    id: number;
    parentId: number;
    createTime: string;
    updateTime: string;
    folderName: string;
    fileType: number;
}
