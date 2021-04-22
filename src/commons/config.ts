interface IConfig {
  apiGatewayUrl?: string;
  homeUrl?: string;
}

const config: IConfig = {
  apiGatewayUrl: process.env.REACT_APP_API_GATEWAY_URL || 'http://localhost:8080',
  homeUrl: process.env.REACT_APP_HOME_URL || 'http://localhost:3000',
};

export default config;
