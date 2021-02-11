import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography,Carousel } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';
import SearchComponent from './SearchComponent';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);


export default (): React.ReactNode => {

  return (
    <PageContainer>

      <div className={styles.searchbox_component}>
      <SearchComponent />
      </div>
    
    </PageContainer>
  );
};
