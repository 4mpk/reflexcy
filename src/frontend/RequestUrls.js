const BASE_URL = "https://localhost:44323";

const ENDPOINTS = {
  Login: `${BASE_URL}/api/app/custom-account/login`,
  Logout: `${BASE_URL}/api/account/logout`,
  SendResetPassword: `${BASE_URL}/api/app/custom-account/send-password-reset-code`,
  VerifyResetPassword: `${BASE_URL}/api/app/custom-account/verify-reset-password`,
  ResetPassword: `${BASE_URL}/api/app/custom-account/do-reset-password`,
  Register: `${BASE_URL}/api/account/register`,
  MyProfile: `${BASE_URL}/api/account/my-profile`
};

export default ENDPOINTS;