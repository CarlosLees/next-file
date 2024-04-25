'use client';

import * as QueryString from 'querystring';

import { useEffect, useState } from 'react';

interface ResponseData<T> {
    code: number;
    msg: string;
    data: T;
}
const powerFetch = async (url: string, config: RequestInit) => {
    // 处理返回结果
    try {
        const response = await fetch(url, config);
        const resp: ResponseData<any> = await response.json();
        return resp;
    } catch (e) {
        return null;
    }
};

const buildCommonHeader = () => {
    return {
        'Access-Control-Allow-Origin': '*',
    };
};

export const useGetRequest = (url: string, params?: Record<string, any>) => {
    const [response, setResponse] = useState<ResponseData<any>>();

    useEffect(() => {
        const request = async () => {
            const uri = `${process.env.NEXT_PUBLIC_BASE_URL}${url}?${QueryString.stringify(params)}`;
            const data = await powerFetch(uri, {
                headers: {
                    ...buildCommonHeader(),
                },
            });
            if (data) {
                setResponse(data);
            }
        };
        request().then();
    }, [url, params]);
    return { response };
};

export const usePostRequest = async (url: string, data?: string) => {
    const [response, setResponse] = useState<ResponseData<any>>();

    useEffect(() => {
        const request = async () => {
            const responseData = await powerFetch(url, {
                method: 'POST',
                headers: {
                    ...buildCommonHeader(),
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: data,
            });

            if (responseData) {
                setResponse(responseData);
            }
        };
        request().then();
    }, [url, data]);

    return { response };
};
