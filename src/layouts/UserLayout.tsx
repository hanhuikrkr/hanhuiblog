import type { MenuDataItem } from '@ant-design/pro-layout';
import { DefaultFooter, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import type { ConnectProps } from 'umi';
import { Link, SelectLang, useIntl, connect, FormattedMessage } from 'umi';
import React from 'react';
import type { ConnectState } from '@/models/connect';
import logo from '../assets/logo.svg';
import styles from './UserLayout.less';
import { GithubOutlined } from '@ant-design/icons';
export type UserLayoutProps = {
  breadcrumbNameMap: Record<string, MenuDataItem>;
} & Partial<ConnectProps>;

const UserLayout: React.FC<UserLayoutProps> = (props) => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { formatMessage } = useIntl();
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    formatMessage,
    breadcrumb,
    ...props,
  });
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div className={styles.contentBox}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img alt="logo" className={styles.logo} src={logo} />
                  <span className={styles.title}>Hanhui Blog</span>
                </Link>
              </div>
              <div className={styles.desc}>
                <FormattedMessage
                  id="pages.layouts.userLayout.title"
                  defaultMessage="韩麾、是杭师大13-106最苟的男人"
                />
              </div>
            </div>
            {children}
          </div>
        </div>

        <DefaultFooter
        
          className={styles.layout_footer_bar}
          copyright={`${new Date().getFullYear()}  2008-${new Date().getFullYear()} hanhui. All Rights Reserved.`}
          links={[
            {
              key: 'github',
              title: <GithubOutlined />,
              href: 'https://github.com/hanhuikrkr',
              blankTarget: true,
              
            },
          ]}
        />
      </div>
    </HelmetProvider>
  );
};

export default connect(({ settings }: ConnectState) => ({ ...settings }))(UserLayout);
