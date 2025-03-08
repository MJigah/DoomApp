// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { StateProps } from "../modules/shared/constants";
// import { getProfileDetails } from "../service/customer.profile.service";
// import { setUserData } from "../redux/slice/user.slice";
// import { setUser } from "./helper";
// import { setBusiness } from "../redux/slice/business.slice";

// export const useUser = () => {
//   const { user: userData, business: merchantBusiness } = useSelector(
//     (state: StateProps) => state
//   );
//   const { user } = userData;
//   const { business } = merchantBusiness;
//   const reduxDispatch = useDispatch();

//   const handleGetUser = async () => {
//     const { data } = await getProfileDetails();
//     const { business, ...rest } = data;
//     console.log(rest);

//     await setUser(rest);
//     reduxDispatch(setUserData({ ...user, ...rest }));
//     reduxDispatch(setBusiness(business));
//   };

//   useEffect(() => {
//     if (!user.first_name) {
//       handleGetUser();
//     }
//   }, []);

//   return {
//     user,
//     handleGetUser,
//     business,
//   };
// };
