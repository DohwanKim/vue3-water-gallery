import Oidc from 'oidc-client';

const { VUE_APP_AUTH_SERVER, VUE_APP_SERVER } = process.env;

const userManager = new Oidc.UserManager({
  authority: VUE_APP_AUTH_SERVER,
  client_id: 'interactive.public',
  response_type: 'code',
  scope: 'openid profile email api offline_access',
  redirect_uri: `${VUE_APP_SERVER}/callback.html`,
  post_logout_redirect_uri: `${VUE_APP_SERVER}/logout.html`,
  silent_redirect_uri: `${VUE_APP_SERVER}/static/silent-renew.html`,
});

export default userManager;
