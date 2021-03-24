import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#FF9C8C',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Hanhui Blog',
  pwa: false,
  iconfontUrl: '//at.alicdn.com/t/font_2345593_pacnfkda4e.js',
  
};

export type { DefaultSettings };

export default proSettings;
