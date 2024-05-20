'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { getApi } from '@/lib/action';
import { HomePageFolders } from '@/types/model';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const File = ({
    params,
    searchParams,
}: {
    params: { path: string };
    searchParams: { id: string };
}) => {
    const router = useRouter();
    const path = params.path.toString().replaceAll(',', '/');
    console.log(path);
    const [data, setData] = useState<HomePageFolders[]>([]);

    console.log(path);
    useEffect(() => {
        // 首次进入 获取文件类型
        getApi('/path/current_path_folder', {
            parent_id: searchParams.id,
            path,
            intact_path: path,
        }).then((response: HomePageFolders[]) => {
            setData(response || []);
        });
    }, [params]);

    return (
        <div>
            文件信息列表:
            <div className="text-white">
                <Table>
                    <TableCaption>文件列表</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">id</TableHead>
                            <TableHead>文件名称</TableHead>
                            <TableHead>文件类型</TableHead>
                            <TableHead className="text-right">上传时间</TableHead>
                            <TableHead>操作</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data &&
                            data.map((entity) => {
                                return (
                                    <TableRow key={entity.id}>
                                        <TableCell className="font-medium">{entity.id}</TableCell>
                                        <TableCell>{entity.folderName}</TableCell>
                                        <TableCell>
                                            {entity.fileType === 1 ? '文件' : '文件夹'}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {entity.createTime}
                                        </TableCell>
                                        {entity.fileType === 1 ? (
                                            <Button>查看详情</Button>
                                        ) : (
                                            <Button
                                                onClick={() => {
                                                    router.push(
                                                        `${path}/${entity.folderName}?id=${entity.id}`,
                                                    );
                                                }}
                                            >
                                                查看
                                            </Button>
                                        )}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default File;
