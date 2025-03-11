import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonButton, IonInput, IonSpinner, IonText } from "@ionic/react";
import { Link } from "react-router-dom";
import LoginIcon from "../../assets/svg/login.svg?react";
import "./login.css";
import { AuthRoutes } from "../../layout/AuthLayout/routes";
import useLogin from "./hooks/useLogin";
import Loader from "../../components/Loader/loader";

const Login = () => {
  const { handleLogin, fullName, setFullName, password, setPassword, loading } =
    useLogin();

  const footerComponent = (
    <div className="flex-1 flex flex-col gap-y-3 px-3 py-3">
      <IonButton className="default-bottom-btn" onClick={handleLogin}>
        <Loader loading={loading} displayText="Login" />
      </IonButton>
      <IonText className="text-center text-sm">
        Already have an account?
        <Link className="text-btnPrimary" to={AuthRoutes.register}>
          {" "}
          Sign up
        </Link>
      </IonText>
    </div>
  );

  return (
    <PageWrapper footerComponent={footerComponent} className="register-page">
      <div className="flex flex-col gap-y-[80px] pt-10">
        <div className="flex flex-col gap-y-5 items-center justify-center">
          <IonText className="font-black text-3xl text-primary text-center">
            DormApp
          </IonText>
          <IonText className="text-lg font-semibold mt-1">
            Welcome back!
          </IonText>
          <IonText className="text-lightGrey text-sm">
            Let's help you get started
          </IonText>
          <LoginIcon className="py-8" />
        </div>
        <form className="flex flex-col gap-y-3">
          <IonInput
            className="text-sm"
            placeholder="Enter your full name or email "
            value={fullName}
            onIonChange={(e: any) => setFullName(e.target.value)}
          />
          <IonInput
            className="text-sm"
            placeholder="Enter your password"
            value={password}
            onIonChange={(e: any) => setPassword(e.target.value)}
          />
        </form>
      </div>
    </PageWrapper>
  );
};

export default Login;
