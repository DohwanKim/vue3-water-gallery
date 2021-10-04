import { User } from 'oidc-client';
import * as authHelper from './authHelper';

export const signOut = (): void => {
  const { CLIENT_ID: clientId, APP_SERVER: returnTo, AUTH_SERVER } = authHelper;
  window.location.href = `${AUTH_SERVER}/v2/logout?client_id=${clientId}&returnTo=${returnTo}/logout.html`;
  window.localStorage.removeItem(`oidc.user:${AUTH_SERVER}:${clientId}`);
};

export const signIn = (): Promise<void> => authHelper.default.signinRedirect();

export const getUser = (): Promise<User | null> => authHelper.default.getUser();
