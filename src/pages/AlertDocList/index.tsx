import { DeleteOneDoc, SelectAllDocList } from '@/services/doc';
import { Table, Tag, Space } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'umi';
export interface dataItem{
  iddoc: number;
  doctitle: string;
  docab: string;
}


const data = [
  {
    iddoc: '1',
    doctitle: 'John Brown',
    
    docab: 'New York No. 1 Lake Park',

  }
];
export default () => {
  let [data,setData]=useState<Array<dataItem>>([]);
  useEffect(() => {

    SelectAllDocList().then((r) => {
      if (r)
      if (r.code == 200) {

        setData(r.data)
        
      }
    });
  }, []);
  const onDelete=(param: number)=>{
let params={iddoc:param}
    DeleteOneDoc(params).then((res) =>{
      SelectAllDocList().then((r) => {
        if (r)
        if (r.code == 200) {

          setData(r.data)
          
        }
      });
    })
  }
  const columns = [
    {
      title: '标题',
      dataIndex: 'doctitle',
      key: 'doctitle',
      render: (text:string) => <a>{text}</a>,
    },
    {
      title: '简介',
      dataIndex: 'docab',
      key: 'docab',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record:dataItem) => (
        <Space size="middle">
          <a onClick={()=>onDelete(record.iddoc)}>删除</a>
          <Link to={`/alertdoc?iddoc=${record.iddoc}`}>修改</Link>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};
