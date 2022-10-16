import { AngularAppOptions, BrowserOptions, DevServerOptions } from '@teambit/angular-apps';

const angularOptions: BrowserOptions & DevServerOptions = {
  main: 'src/main.ts',
  polyfills: 'src/polyfills.ts',
  index: 'src/index.html',
  tsConfig: 'tsconfig.app.json',
  assets: ['src/favicon.ico', 'src/assets'],
  styles: ['src/styles.scss']
};

export const MyApp1Options: AngularAppOptions = {
  sourceRoot: 'src',
  portRange: [3001, 3001],
  
  /**
   * Name of the app in Bit CLI.
   */
  name: 'my-app1',

  /**
   * Angular options for `bit build`
   */
  angularBuildOptions: angularOptions,

  /**
   * Angular options for `bit run`
   */
  angularServeOptions: angularOptions
};

export default MyApp1Options;
