import React from "react";
import {
  AnimationBuilder,
  RouteAction,
  RouterDirection,
  RouterOptions,
  useIonRouter,
} from "@ionic/react";

const usePush = () => {
  const router = useIonRouter();
  const push = (
    path: string,
    routerDirection?: RouterDirection,
    routeAction?: RouteAction,
    routerOptions?: RouterOptions,
    animationBuilder?: AnimationBuilder
  ) => {
    router.push(
      path,
      routerDirection,
      routeAction,
      routerOptions,
      animationBuilder
    );
  };
  return { push };
};

export default usePush;
