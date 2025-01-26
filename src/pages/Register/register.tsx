import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonButton, IonInput, IonText } from "@ionic/react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const footerComponent = (
    <div className="flex-1 flex flex-col gap-y-3 px-3 py-3">
      <IonButton className="default-bottom-btn">Register</IonButton>
      <IonText className="text-center text-sm">
        Already have an account?
        <Link className="text-btnPrimary" to="#">
          {" "}
          Sign in
        </Link>
      </IonText>
    </div>
  );
  return (
    <PageWrapper footerComponent={footerComponent} className="register-page">
      <div className="flex flex-col gap-y-[80px] py-[120px]">
        <div className="flex flex-col gap-y-5 items-center justify-center">
          <IonText className="font-black text-3xl text-primary text-center">
            DormApp
          </IonText>
          <IonText className="text-lg font-semibold mt-1">
            Welcome Onboard!
          </IonText>
          <IonText className="text-lightGrey text-sm">
            Let's get you started
          </IonText>
        </div>
        <form className="flex flex-col gap-y-3">
          <IonInput className="text-sm" placeholder="Enter your full name" />
          <IonInput className="text-sm" placeholder="Enter your email" />
          <IonInput className="text-sm" placeholder="Admin/Staff/Student" />
          <IonInput className="text-sm" placeholder="Enter your password" />
          <IonInput className="text-sm" placeholder="Confirm Password" />
        </form>
      </div>
    </PageWrapper>
  );
};

export default Register;
