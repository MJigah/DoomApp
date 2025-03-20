import React from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonButton, IonInput, IonText } from "@ionic/react";
import { Link } from "react-router-dom";
import "./register.css";
import { AuthRoutes } from "../../layout/AuthLayout/routes";
import useRegister from "./hooks/useRegister";
import Loader from "../../components/Loader/loader";

const Register = () => {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    role,
    setRole,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    handleRegister,
  } = useRegister();
  const footerComponent = (
    <div className="flex-1 flex flex-col gap-y-3 px-3 py-3">
      <IonButton className="default-bottom-btn" onClick={handleRegister}>
        <Loader displayText="Register" loading={loading} />
      </IonButton>
      <IonText className="text-center text-sm">
        Already have an account?
        <Link className="text-btnPrimary" to={AuthRoutes.login}>
          {" "}
          Sign in
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
            Welcome Onboard!
          </IonText>
          <IonText className="text-lightGrey text-sm">
            Let's get you started
          </IonText>
        </div>
        <form className="flex flex-col gap-y-3">
          <IonInput
            className="text-sm"
            placeholder="Enter your full name"
            value={fullName}
            onIonChange={(e: any) => setFullName(e.target.value)}
          />
          <IonInput
            className="text-sm"
            placeholder="Enter your email"
            value={email}
            onIonChange={(e: any) => setEmail(e.target.value)}
          />
          <IonInput
            className="text-sm"
            placeholder="Admin/Staff/Student"
            value={role}
            onIonChange={(e: any) => setRole(e.target.value)}
          />
          <IonInput
            className="text-sm"
            placeholder="Enter your password"
            type="password"
            value={password}
            onIonChange={(e: any) => setPassword(e.target.value)}
          />
          <IonInput
            className="text-sm"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onIonChange={(e: any) => setConfirmPassword(e.target.value)}
          />
        </form>
      </div>
    </PageWrapper>
  );
};

export default Register;
