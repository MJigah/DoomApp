import React from "react";
import "./loader.css";
import { IonSpinner } from "@ionic/react";

const Loader = ({
  loading,
  displayText,
}: {
  loading: boolean;
  displayText: string;
}) => {
  return (
    <>{loading ? <IonSpinner name="crescent"></IonSpinner> : displayText}</>
  );
};

export default Loader;
