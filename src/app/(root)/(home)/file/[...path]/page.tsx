'use client';

import { useEffect, useState } from 'react';

import { getApi } from '@/lib/action';
import { HomePageFolders } from '@/types/model';
import { Button } from '@/components/ui/button';

const File = ({
    params,
    searchParams,
}: {
    params: { path: string };
    searchParams: { id: string };
}) => {
    console.log(searchParams.id);
    const [data, setData] = useState<HomePageFolders[]>([]);

    useEffect(() => {
        // 首次进入 获取文件类型
        getApi('/path/current_path_folder', {
            parent_id: searchParams.id,
            path: params.path.toString().replaceAll(',', '/'),
            intact_path: params.path.toString().replaceAll(',', '/'),
        }).then((response: HomePageFolders[]) => {
            setData(response || []);
        });
    }, [params]);

    return (
        <div>
            文件信息列表:
            <div className="text-white">
                {data &&
                    data.map((entity) => {
                        return (
                            <div className="text-white" key={entity.id}>
                                {entity.folderName}:{entity.fileType === 1 && <Button>播放</Button>}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default File;
