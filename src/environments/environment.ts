// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'http://localhost:1337',
  cp: {
    api_key: '5579980505863a3f6aabd82.89189525',
    site_id: 659913,
    notify_url: 'https://YOUR_NOTIFY_URL',
    currency: 'CFA'
  },
  firebase : {

    databaseURL: "https://bocadillos-chiqui-default-rtdb.firebaseio.com",
    apiKey: "AIzaSyChuDbtOh7Dy6FRsnvtNLx3gmEjTGezue4",
    authDomain: "bocadillos-chiqui.firebaseapp.com",
    projectId: "bocadillos-chiqui",
    storageBucket: "bocadillos-chiqui.appspot.com",
    messagingSenderId: "701332314169",
    appId: "1:701332314169:web:794bdadc85c34a6d9655e8",
    measurementId: "G-7QRJCWL5CR"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
