import React, { useEffect,useState } from 'react';
import styles from './index.less';
import { List, Avatar } from 'antd';
import { Selectquery } from '@/services/doc.ts';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


export interface listDataProps{
  iddoc:number;
  docab: string;
  doctype: number;
  docpicab: string;

  doctitle: string;
  docathorname: '韩麾';
  doctime:Date;


}
export default (props: { location: any }) => {
  const [listData, setListData] = useState<Array<listDataProps>>([]);
  console.log(props.location);
  useEffect(() => {

    Selectquery(props.location).then((r) => {
      if (r)
      if (r.code == 200) {
        setListData(r.data)
        
      }
    });
  }, [props.location]);
  return (
    <div className={styles.g_listContainer}>
      <div id="components-list-demo-vertical">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          footer={
            <div style={{ textAlign: 'center' }}>
              
            </div>
          }
          renderItem={(item) => (
            <List.Item
              key={item.iddoc + item.doctitle}
              extra={<img width={170} alt="logo" src={item.docpicab} />}
            >
              <List.Item.Meta
                avatar={<Avatar src="http://www.hanhuikrkr.com:7112/57887545.png" />}
                title={<a href={`/showdoc?iddoc=${item.iddoc}`}>{item.doctitle}</a>}
                description={item.doctime}
              />
              {item.docab}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
