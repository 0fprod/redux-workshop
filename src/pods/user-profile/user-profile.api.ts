import { UserProfileVm, createDefaultUserProfileVm } from "./user-profile.vm";
import { BaseAPI, PARAMETER_FLAG } from "../../core";

class UserProfileAPI extends BaseAPI<UserProfileVm> {
  dataMapper(data: any): Promise<UserProfileVm> {
    let user: UserProfileVm = createDefaultUserProfileVm();
    const keysOfUserProfileVm = Object.keys(user);

    // map only the keys that belong to our viewModel
    const mappedUser = keysOfUserProfileVm.reduce(
      (accumulatedObject, currentProperty) => {
        accumulatedObject[currentProperty] = data[currentProperty];
        return accumulatedObject;
      },
      {}
    );

    Object.assign(user, mappedUser);

    return Promise.resolve(user);
  }
}
const url: string = `https://api.github.com/user/${PARAMETER_FLAG}`;
export const userProfileAPI = new UserProfileAPI(url);
