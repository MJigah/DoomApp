import { IonRouterOutlet } from "@ionic/react";
import React from "react";
import { Route } from "react-router-dom";
import { AuthRoutes } from "./routes";
import Onboarding from "../../pages/Onboarding/onboarding";
import SplashScreen from "../../pages/SplashScreen/splashScreen";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import Register from "../../pages/Register/register";
import CategoryRegistration from "../../pages/CategoryRegistration/categoryRegistration";

const AuthLayout = () => {
  return (
    <PageWrapper>
      <IonRouterOutlet>
        <Route path={AuthRoutes.onboarding}>
          <Onboarding />
        </Route>
        <Route path={AuthRoutes.splash}>
          <SplashScreen />
        </Route>
        <Route path={AuthRoutes.register}>
          <Register />
        </Route>
        <Route path={AuthRoutes.category}>
          <CategoryRegistration />
        </Route>
      </IonRouterOutlet>
    </PageWrapper>
  );
};

export default AuthLayout;
