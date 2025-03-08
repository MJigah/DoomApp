// import { useEffect } from "react";
// import { useLocation } from "react-router";
// import { useIonRouter } from "@ionic/react";
// import { useDispatch } from "react-redux";
// import {
//   appendQueryParams,
//   getLoginTime,
//   getToken,
//   getUser,
//   removeUserSession,
// } from "./helper";
// import { setUserData } from "../redux/slice/user.slice";
// import { AuthRoutes } from "../layouts/AuthLayout/routes";
// import { MerchantTabRoutes } from "../layouts/MerchantTabLayout/routes";
// import { TabRoutes } from "../layouts/TabLayout/routes";
// import { TOKEN_EXPIRY_HOURS } from "../modules/shared/constants";

// export const useAuthSession = () => {
//   const reduxDispatch = useDispatch();
//   const location = useLocation();
//   const router = useIonRouter();
//   const page = location.pathname;

//   enum CustomerAuthRoutes {
//     root = "/auth",
//     signup = `${AuthRoutes.root}/signup`,
//     login = `${AuthRoutes.root}/login`,
//     success = `${AuthRoutes.root}/success`,
//     resetPassword = `${AuthRoutes.root}/resetPassword`,
//     changePassword = `${AuthRoutes.root}/password/change`,
//     otpConfirmation = `${AuthRoutes.root}/otpConfirmation`,
//   }

//   enum MerchantAuthRoutes {
//     root = "/auth",
//     merchantOtpConfirmation = `${AuthRoutes.root}/merchant/otpConfirmation`,
//     merchantSignup = `${AuthRoutes.root}/merchantSignup`,
//     merchantLogin = `${AuthRoutes.root}/merchantLogin`,
//     merchantSuccess = `${AuthRoutes.root}/merchantSuccess`,
//   }
//   const isOnboardingCustomerRoute = (path: string) => {
//     // Convert the OnboardingRoutes enum to an array of values
//     const onboardingRoutes = Object.values(CustomerAuthRoutes);

//     // Check if the given path includes any of the onboarding routes
//     return onboardingRoutes.some((route) => path.includes(route));
//   };

//   const isOnboardingMerchantAuthRoutesRoute = (path: string) => {
//     // Convert the OnboardingRoutes enum to an array of values
//     const onboardingRoutes = Object.values(MerchantAuthRoutes);

//     // Check if the given path includes any of the onboarding routes
//     return onboardingRoutes.some((route) => path.includes(route));
//   };

//   useEffect(() => {
//     const runGuard = async () => {
//       const token = await getToken();
//       const loginTime = await getLoginTime();
//       const currentTime = new Date().getTime();
//       const expiryTime =
//         new Date(parseInt(loginTime)).getTime() +
//         TOKEN_EXPIRY_HOURS * 60 * 60 * 1000;
//       const userData = await getUser();

//       if (token) {
//         if (currentTime >= expiryTime) {
//           removeUserSession();
//           return router.push(
//             appendQueryParams(AuthRoutes.login, { sessionTimeout: "true" })
//           );
//         }
//         reduxDispatch(setUserData(userData));
//         if (isOnboardingCustomerRoute(page) && !!userData?.isEmailVerified) {
//           router.push(TabRoutes.home);
//         } else if (
//           isOnboardingMerchantAuthRoutesRoute(page) &&
//           !!userData?.isEmailVerified
//         ) {
//           router.push(MerchantTabRoutes.home);
//         } else {
//           return;
//         }
//       } else {
//         if (isOnboardingCustomerRoute(page)) {
//           return;
//         } else if (isOnboardingMerchantAuthRoutesRoute(page)) {
//           return;
//         } else {
//           // router.push(AuthRoutes.onboarding);
//           return;
//         }
//       }
//     };
//     runGuard();
//   }, [page]);
//   return {};
// };
