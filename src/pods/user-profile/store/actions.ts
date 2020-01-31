import { UserProfileVm } from "../user-profile.vm";
import { actionsIds, IAction } from ".";


export const updateUpserProfile = (newName: UserProfileVm): IAction => ({
  type: actionsIds.UPDATE_USER,
  payload: newName
});

