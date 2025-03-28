import { UserManager, WebStorageStateStore } from "oidc-client-ts";

export const googleAuth = new UserManager({
  authority: "https://accounts.google.com",
  client_id: "705361540138-9hkej2l024kv9ebdkgfi2a1tq9dn0n66.apps.googleusercontent.com",
  redirect_uri: "http://localhost:3000/callback",
  response_type: "code", 
  scope: "openid",
  userStore: new WebStorageStateStore({ store: window.localStorage }),
});