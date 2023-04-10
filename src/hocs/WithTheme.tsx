import ConfigProvider from 'antd/lib/config-provider';

const theme = {
  token: {
    fontSize: 13,
    fontFamily: 'Inter Regular, sans-serif',
    colorPrimary: '#e49e4c',
  },
};

export default ({ children }: any) => <ConfigProvider theme={theme}>{children}</ConfigProvider>;
