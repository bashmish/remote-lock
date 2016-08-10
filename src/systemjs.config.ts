const map: { [index: string]: string } = {
  'app': 'app',
  '@angular': 'node_modules/@angular',
  '@angular2-material': 'node_modules/@angular2-material',
  'rxjs': 'node_modules/rxjs',
  'pouchdb': 'node_modules/pouchdb',
  'lodash': 'node_modules/lodash',
};

const packages: { [index: string]: any } = {
  'app': { main: 'main.js', defaultExtension: 'js' },
  'rxjs': { main: 'Rx.js', defaultExtension: 'js' },
  'pouchdb': { main: 'dist/pouchdb.js', defaultExtension: 'js' },
  'lodash': { main: 'lodash.js', defaultExtension: 'js' },
};

const ngPackageNames = [
  'common',
  'compiler',
  'core',
  'forms',
  'http',
  'platform-browser',
  'platform-browser-dynamic',
  'router',
];

// Individual files (~300 requests):
const packIndex = (pkgName) => {
  packages[`@angular/${pkgName}`] = { main: 'index.js', defaultExtension: 'js' };
};

// Bundled (~40 requests):
const packUmd = (pkgName) => {
  packages[`@angular/${pkgName}`] = { main: `/bundles/${pkgName}.umd.js`, defaultExtension: 'js' };
};

ngPackageNames.forEach(SystemJS.packageWithIndex ? packIndex : packUmd);

const ngMaterialPackageNames = [
  'button',
  'button-toggle',
  'card',
  'checkbox',
  'core',
  'grid-list',
  'icon',
  'input',
  'list',
  'menu',
  'progress-bar',
  'progress-circle',
  'radio',
  'sidenav',
  'slider',
  'slide-toggle',
  'tabs',
  'toolbar',
  'tooltip',
];

ngMaterialPackageNames.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = { main: `${pkg}.js` };
});

const config = {
  map: map,
  packages: packages
};

SystemJS.config(config);
