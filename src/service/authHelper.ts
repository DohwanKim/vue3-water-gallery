import Oidc from 'oidc-client';

const { VUE_APP_AUTH_SERVER, VUE_APP_SERVER, VUE_APP_CLIENT_ID } = process.env;

export const AUTH_SERVER = VUE_APP_AUTH_SERVER;
export const APP_SERVER = VUE_APP_SERVER;
export const CLIENT_ID = VUE_APP_CLIENT_ID;

const userManager = new Oidc.UserManager({
  userStore: new Oidc.WebStorageStateStore({}),
  authority: VUE_APP_AUTH_SERVER,
  client_id: 'SaQgpM7cPGNZ1ZqSefoiNP7dV4rcpzkI',
  response_type: 'id_token',
  scope: 'openid profile email api offline_access',
  redirect_uri: `${VUE_APP_SERVER}/callback.html`,
  post_logout_redirect_uri: `${VUE_APP_SERVER}/logout.html`,
  silent_redirect_uri: `${VUE_APP_SERVER}/silent-renew.html`,

  metadata: {
    issuer: 'https://dev-9sonez4j.us.auth0.com/',
    authorization_endpoint: 'https://dev-9sonez4j.us.auth0.com/authorize',
    token_endpoint: 'https://dev-9sonez4j.us.auth0.com/oauth/token',
    jwks_uri: 'https://dev-9sonez4j.us.auth0.com/.well-known/jwks.json',
    end_session_endpoint: `${VUE_APP_AUTH_SERVER}/v2/logout`,
  },

  automaticSilentRenew: true,
  loadUserInfo: true,
});

userManager.events.addAccessTokenExpired(() => {
  (async () => {
    try {
      const resp = await userManager.signoutRedirect();
      console.info('signed out', resp);
    } catch (err) {
      console.info(err);
    }
  })();
});

userManager.events.removeUserSignedOut(() => {
  window.location.href = '/';
});

export default userManager;
