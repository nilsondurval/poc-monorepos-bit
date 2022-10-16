import { AngularAppOptions, BrowserOptions, DevServerOptions } from '@teambit/angular-apps';

const angularOptions: BrowserOptions & DevServerOptions = {
  main: 'src/main.ts',
  polyfills: 'src/polyfills.ts',
  index: 'src/index.html',
  tsConfig: 'tsconfig.app.json',
  assets: ['src/favicon.ico', 'src/assets'],
  styles: ['src/styles.scss'],
};

export const MyAppOptions: AngularAppOptions = {
  sourceRoot: 'src',
  
  /**
   * Name of the app in Bit CLI.
   */
  name: 'my-app',

  /**
   * Angular options for `bit build`
   */
  angularBuildOptions: angularOptions,

  /**
   * Angular options for `bit run`
   */
  angularServeOptions: angularOptions
};

export default MyAppOptions;
