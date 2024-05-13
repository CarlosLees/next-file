'use client';

import { useEffect, useState } from 'react';

import { getApi } from '@/lib/action';
import { HomePathFileResponse } from '@/types/model';
import { Button } from '@/components/ui/button';

const File = ({ params }: { params: { path: string } }) => {
    console.log(params.path);
    const [data, setData] = useState<HomePathFileResponse[]>([]);

    useEffect(() => {
        // 首次进入 获取文件类型
        getApi('/path/folder_from_path', {
            path_type: 1,
        }).then((response: HomePathFileResponse[]) => {
            if (response) {
                setData(response);
            }
        });
    }, [params.path]);

    return (
        <div>
            文件信息列表:
            <div className="text-white">
                {data &&
                    data.map((entity) => {
                        return (
                            <div className="text-white" key={entity.fileName}>
                                {entity.fileName}:{entity.fileType === 1 && <Button>播放</Button>}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default File;
