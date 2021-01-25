import React from "react";
import styles from "./index.less";
import { List, Avatar } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "2021/1/25 23:39",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

export default (props) => {
  console.log(props)
  return(
<div className={styles.container}>
    <div id="components-list-demo-vertical">
      <List
        itemLayout="vertical"
        size="large"
 
        dataSource={listData}
        footer={
          <div style={{textAlign:"center"}}>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.title}
          
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  </div>)
}
 

