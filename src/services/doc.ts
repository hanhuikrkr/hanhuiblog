import request from '@/utils/request';
export interface UploadProps {
    docab: string;
    doctype: number;
    docpicab: string;
    doctext: string;
    doctitle: string;
    docathorname: '韩麾';
}
export async function upload(params: UploadProps): Promise<any> {
    return request('http://localhost:8108/doc/upload', {
        method: 'POST',
        data: params,
    });
}
export interface SelectListProps {
    sort: number
}
export async function Selectquery(params:SelectListProps): Promise<any> {
    return request('http://localhost:8108/doc/selectTypeToList', {
        method: 'POST',
        data: params,
    });
}
export interface SelectDocDataProps {
    iddoc: number
}
export async function SelectDocData(params:SelectDocDataProps): Promise<any> {
    return request('http://localhost:8108/doc/selectDocTextById', {
        method: 'POST',
        data: params,
});
}
