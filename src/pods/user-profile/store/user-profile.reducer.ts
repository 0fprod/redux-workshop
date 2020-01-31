import { UserProfileVm, createDefaultUserProfileVm } from "../user-profile.vm";
import { IAction } from "./action.interface";
import { actionsIds } from "./action-ids";

export interface UserProfileState {
  userProfile: UserProfileVm;
  setUserProfile: (user: UserProfileVm) => void;
}

export const defaultUserState = (): UserProfileState => ({
  userProfile: createDefaultUserProfileVm(),
  setUserProfile: (user: UserProfileVm) => {}
});

export const userProfileReducer = (state = defaultUserState(),action: IAction
): UserProfileState => {
  switch(action.type){
    case actionsIds.UPDATE_USER:
      return updateUserActionHandler(state, action.payload);
    default:
      return state;
  }
};

const updateUserActionHandler = (
  state: UserProfileState,
  user
): UserProfileState => ({
  ...state,
  userProfile: user
});
