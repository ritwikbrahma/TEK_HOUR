// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  adalConfig: {
    tenant: '371cb917-b098-4303-b878-c182ec8403ac',
    clientId: '85a8e3f2-4529-4872-a38c-7362fb79ea52',
    postLogoutRedirectUri: 'http://localhost:4200/logout',
    endpoints: {
      'http://localhost:4200/': 'http://localhost:4200/',
    },
  },
  apiUrl: 'https://login.microsoftonline.com/371cb917-b098-4303-b878-c182ec8403ac/oauth2/token'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
