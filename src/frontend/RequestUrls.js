const BASE_URL = "https://localhost:44323";

const ENDPOINTS = {
  Login: `${BASE_URL}/api/app/custom-account/login`,
  Logout: `${BASE_URL}/api/account/logout`,
  SendResetPassword: `${BASE_URL}/api/app/custom-account/send-password-reset-code`,
  VerifyResetPassword: `${BASE_URL}/api/app/custom-account/verify-reset-password`,
  ResetPassword: `${BASE_URL}/api/app/custom-account/do-reset-password`,
  Register: `${BASE_URL}/api/account/register`,
  DeleteAccount: `${BASE_URL}/api/app/custom-account`,
  MyProfile: `${BASE_URL}/api/account/my-profile`,
  DataForm: `${BASE_URL}/Templates/DataForm`,
  Downloads: `${BASE_URL}/Templates/GetAll`,
  DownloadFile: `${BASE_URL}/Templates/PDF`,
  DownloadSampleFile: `${BASE_URL}/Templates/PDF/Sample`,
  FavoriteList: `${BASE_URL}/Favorites/GetAll`,
  MakeFavorite: `${BASE_URL}/Favorites/MakeFavorite`,
  SavedList: `${BASE_URL}/SavedProjects/GetAll`,
  MakeSave: `${BASE_URL}/SavedProjects/MakeSave`,
  UploadProfile: `${BASE_URL}/File/uploadProfileImage`,
  GetProfileImage: `${BASE_URL}/File/GetProfileImage`,
  DeleteProfileImage: `${BASE_URL}/File/DeleteProfileImage`,
  ContactSupport: `${BASE_URL}/Entities/ContactSupport`,
  ReportBug: `${BASE_URL}/Entities/ReportBug`,
  Feedback: `${BASE_URL}/Entities/Feedback`,
  RequestFeature: `${BASE_URL}/Entities/RequestFeature`,
};

export default ENDPOINTS;