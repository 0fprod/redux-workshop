import { generatePath } from "react-router-dom";

interface ISwitchRoutes {
  root: string;
  userProfile: string;
}

export const SwitchRoutes: ISwitchRoutes = {
  root: "/",
  userProfile: "/userprofile/:id",
};

type NagivationFunction = (id: number) => string;

interface ILinkedRoutes extends Omit<ISwitchRoutes, "userProfile"> {
  userProfile: NagivationFunction;
}

export const LinkedRoutes : ILinkedRoutes = {
  ...SwitchRoutes,
  userProfile: id => generatePath(SwitchRoutes.userProfile, {id})
}
