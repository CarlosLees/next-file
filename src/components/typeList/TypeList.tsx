'use client';

import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

import HomeCard from '@/components/typeList/homeCard/HomeCard';
import { getApi } from '@/lib/action';
import { HomePageFolders } from '@/types/model';

const TypeList = () => {
    const router = useRouter();
    const [folders, setFolders] = useState<HomePageFolders[]>([]);

    useEffect(() => {
        // 获取首页全部文件夹
        getApi('/path/home_page_folders').then((res: HomePageFolders[]) => {
            if (res) {
                setFolders(res);
            }
        });
    }, []);

    return (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-1 xl:grid-cols-4">
            {folders &&
                folders.map((folder) => {
                    return (
                        <div key={folder.id}>
                            <HomeCard
                                imageUrl="/icons/add-meeting.svg"
                                title={folder.folderName}
                                description="Start an instant Meeting"
                                handleClick={() => {
                                    router.push(`file/index`, {});
                                }}
                                className="bg-orange-400"
                            />
                        </div>
                    );
                })}
            {/* <HomeCard */}
            {/*    imageUrl="/icons/add-meeting.svg" */}
            {/*    title="New Meeting" */}
            {/*    description="Start an instant Meeting" */}
            {/*    handleClick={() => { */}
            {/*        router.push('/file', {}); */}
            {/*    }} */}
            {/*    className="bg-orange-400" */}
            {/* /> */}
        </section>
    );
};

export default TypeList;
