import { IonPage, IonText, useIonRouter } from "@ionic/react";
import React, { useEffect } from "react";

const Onboarding = () => {
  const router = useIonRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/auth/splash");
    }, 3000);
  }, []);

  return (
    <IonPage>
      <div className="bg-primary h-screen flex items-center justify-center">
        <IonText className="font-black text-3xl text-white">DormApp</IonText>
      </div>
    </IonPage>
  );
};

export default Onboarding;
