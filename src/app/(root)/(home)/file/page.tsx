import { getApi } from '@/lib/action';
import { HomePathFileResponse } from '@/types/model';
import { Button } from '@/components/ui/button';

const File = async () => {
    // 首次进入 获取文件类型
    const data = (await getApi('/path/folder_from_path', {
        path_type: 1,
    })) as HomePathFileResponse[];

    console.log(data);
    return (
        <div>
            文件信息列表:
            <div className="text-white">
                {data &&
                    data.map((entity, index) => {
                        return (
                            <div className="text-white" key={index}>
                                {entity.file_name}:{entity.file_type === 1 && <Button>播放</Button>}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default File;
