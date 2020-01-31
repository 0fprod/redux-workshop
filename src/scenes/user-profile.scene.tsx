import * as React from "react";
import { CenteredLayout } from "../layout";
import { UserProfileContainer } from "../pods/user-profile/user-profile.container";

export const UserProfileScene = () => {
  
  return(
    <CenteredLayout>
      <UserProfileContainer></UserProfileContainer>
    </CenteredLayout>
  )
};
