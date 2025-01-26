import React from "react";
import { IonFooter, IonButton, IonText } from "@ionic/react";
import SplashImage from "../../assets/image/splash.png";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import "./splashScreen.css";

const SplashScreen = () => {
  const footerComponent = (
    <IonButton className="flex-1 rounded-sm default-bottom-btn font-semibold text-lg">
      Get Started
    </IonButton>
  );

  return (
    <PageWrapper
      footerComponent={footerComponent}
      footerClassName="p-3 pb-7 flex"
    >
      <div className="bg-white h-screen flex flex-col gap-y-3 items-center justify-center px-3">
        <IonText className="font-black text-primary text-3xl">DormApp</IonText>
        <img src={SplashImage} alt="splash-image" className="mt-8" />
        <IonText className="font-semibold text-lg">
          Home is where you are
        </IonText>
        <IonText className="text-center text-sm w-[60%]">
          Your cozy corner away from home. Stay connected, stay comfortable, and
          make every moment count
        </IonText>
      </div>
    </PageWrapper>
  );
};

export default SplashScreen;
