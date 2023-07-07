import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.stayfresh.app',
  appName: 'stayfreshapp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
