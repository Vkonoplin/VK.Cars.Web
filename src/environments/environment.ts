// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  azureAd: {
    tenant: 'd0f716c3-2ace-4ddb-82ec-81422d9aa394',
    clientId: '84c37cca-5e75-4365-a880-707daf3f6f17',
    redirectUri: window.location.origin,
    endpoints: {
      'http://localhost:5303': '286c54d7-d56d-4b8a-8656-8a4bf9a9b825'
    },
    navigateToLoginRequestUrl: false,
    cacheLocation: 'localStorage'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
