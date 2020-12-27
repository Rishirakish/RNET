import { ILoginState } from "../stores/auth/type";
import { TOKEN_KEY, USER_NAME } from "../stores/action-types";



export const doLogin = (user: any) => {
  localStorage.setItem(TOKEN_KEY, user.access_token);
  localStorage.setItem(USER_NAME, user.sub);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }

  return false;
};
