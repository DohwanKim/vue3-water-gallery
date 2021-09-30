import Oidc from 'oidc-client';

const { VUE_APP_AUTH_SERVER, VUE_APP_SERVER } = process.env;

const userManager = new Oidc.UserManager({
  userStore: new Oidc.WebStorageStateStore({}),
  authority: VUE_APP_AUTH_SERVER,
  client_id: 'interactive.public',
  response_type: 'code',
  scope: 'openid profile email api offline_access',
  redirect_uri: `${VUE_APP_SERVER}/callback.html`,
  post_logout_redirect_uri: `${VUE_APP_SERVER}/logout.html`,
  silent_redirect_uri: `${VUE_APP_SERVER}/static/silent-renew.html`,

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

export default userManager;
