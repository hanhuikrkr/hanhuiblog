import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'umi';
import styles from './index.less';
import { Input, Cascader } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { docTypeOption } from '../../constant/data';
import { history } from 'umi';
import { SelectAllDocList } from '@/services/doc';
import {clone}from '@/utils/utils'
export interface dataItem {
  iddoc: number;
  doctitle: string;
  docab: string;
  doctype: number;
}

const dropdownRender = (menus: React.ReactNode) => {
  return (
    <div id={'test'} className={styles.dropdownClass}>
      {menus}
    </div>
  );
};
const onChange = (value: any) => {

  if( typeof(value[value.length-1])=='number'){
    history.push(`/showdoc?iddoc=${value[value.length-1]}`)
  }
};
const filter = (inputValue: any, path: any) => {
  return path.some(
    (option: { label: string }) =>
      option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
  );
};

export default () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    SelectAllDocList().then((r) => {
      if (r)
        if (r.code == 200) {

          let docDataBackUp=clone(docTypeOption)
          docDataBackUp.map((item, index) => {
            if (item.children.length === 0) {
              for (let j = 0, len = r.data.length; j < len; j++) {
                if (r.data[j].doctype == item.value) {
                  let docItem = {
                    value: r.data[j].iddoc,
                    label: r.data[j].doctitle,
                  };

                  item.children.push(docItem);
                 
                }
              }
            }else{
              
              item.children.map((citem)=>{

                if(citem.children!=undefined)
                if (citem.children.length === 0) {
                for (let j = 0, len = r.data.length; j < len; j++) {
                  if (r.data[j].doctype == (''+item.value+citem.value)) {
                    let docItem = {
                      value: r.data[j].iddoc,
                      label: r.data[j].doctitle,
                    };
  
                    citem.children.push(docItem);
                   
                  }
                }
              }else{
                citem.children.map((ditem)=>{
                  if(ditem.children!=undefined)
                 
                    if (ditem.children.length === 0) {
                      for (let j = 0, len = r.data.length; j < len; j++) {
                        if (r.data[j].doctype == (''+item.value+citem.value+ditem.value)) {
                          let docItem = {
                            value: r.data[j].iddoc,
                            label: r.data[j].doctitle,
                          };
        
                          ditem.children.push(docItem);
                         
                        }
                      }
                  }
                })
              }
             }
              )
            }
          });
          // console.log(docTypeOption);
          setData(docDataBackUp);
        }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div id="components-auto-complete-demo-certain-category">
        <Cascader
          size="large"
          className={styles.dropdownCascader}
          options={data}
          onChange={onChange}
          bordered={false}
          suffixIcon={<SearchOutlined />}
          placeholder="请输入搜索内容"
          dropdownRender={dropdownRender}
          showSearch={{ filter, matchInputWidth: true }}
        />
      </div>
    </div>
  );
};
