import { Card, Form, List, Avatar, Select, Typography } from 'antd';
import React, { FC, useEffect } from 'react';
import { connect, Dispatch, Link } from 'umi';

import { StateType } from './model';
import { ListItemDataType } from './data.d';
import {projectData} from '@/constant/data'
import styles from './style.less';

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
    <Link to={item.href}>
    <List.Item>
          <Card className={styles.card} hoverable cover={<img alt={item.title} src={item.cover} />}>
            <Card.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={
                <Paragraph className={styles.item} ellipsis={{ rows: 2 }}>
                  {item.subDescription}
                </Paragraph>
              }
            />
            <div className={styles.cardItemContent}>
              <span>{item.updatedAt}</span>
              <div className={styles.avatarList}>
              <Avatar   src="http://www.hanhuikrkr.com:7112/57887545.png" />

              </div>
            </div>
          </Card>
        </List.Item>
        </Link>
    
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
    <div className={styles.coverCardList}>
   
      <div className={styles.cardList}>{cardList}</div>
    </div>
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
