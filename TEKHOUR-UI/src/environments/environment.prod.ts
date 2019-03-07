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
