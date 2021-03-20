import { Card, Form, List, Avatar, Select, Typography,Tooltip } from 'antd';
import React, { FC, useEffect } from 'react';
import { connect, Dispatch, Link } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { StateType } from './model';
import { ListItemDataType } from './data.d';
import {projectData} from '@/constant/data'
import styles from './style.less';
import { PageContainer } from '@ant-design/pro-layout';

const { Option } = Select;
const FormItem = Form.Item;
const { Paragraph } = Typography;

interface ProjectPageProps {


  loading: boolean;
}

const getKey = (id: string, index: number) => `${id}-${index}`;

const ProjectPage: FC<ProjectPageProps> = ({

  loading,
}) => {

  const cardList = projectData && (
    <List<ListItemDataType>
      rowKey="id"
      loading={loading}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      dataSource={projectData}
      renderItem={(item) => (
    
    <List.Item>
          <Card className={styles.card} hoverable cover={<img style={{height:"400px",objectFit:"cover"}} alt={item.title} src={item.cover} />}>
            <Card.Meta
              title={<div><a href={item.href}>{item.title}</a></div>}
              description={
                <Paragraph className={styles.item} ellipsis={{ rows: 3 }}>
                  {item.subDescription}
                </Paragraph>
              }
            />
            <div className={styles.cardItemContent}>
              <span>{item.updatedAt}</span>
              <div className={styles.avatarList}>
              <a style={{float:"right"}}  href={item.githref}>
              <Tooltip title={ <GithubOutlined/>} placement="top">
              <Avatar   src="http://www.hanhuikrkr.com:7112/57887545.png" />
              </Tooltip>
             </a>
              </div>
            </div>
          </Card>
        </List.Item>
        
    
      )}
    />
  );

  const formItemLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  return (
    <PageContainer>
    <div className={styles.coverCardList}>
   
      <div className={styles.cardList}>{cardList}</div>
    </div>
    </PageContainer>
  );
};

export default connect(
  ({
    projectPage,
    loading,
  }: {
    projectPage: StateType;
    loading: { models: { [key: string]: boolean } };
  }) => ({
    projectPage,
    loading: loading.models.projectPage,
  }),
)(ProjectPage);
