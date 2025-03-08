import { IonPage, IonText } from "@ionic/react";
import React, { useEffect } from "react";
import usePush from "../../utils/usePush";

const Onboarding = () => {
  const { push } = usePush();
  useEffect(() => {
    setTimeout(() => {
      push("/auth/splash");
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
