import * as React from "react";
import { UserCardComponent } from "./components";
import { UserProfileVm } from "./user-profile.vm";

interface Props {
    user: UserProfileVm,
    navigateTo: () => void;
}

export const UserProfileComponent = (props: Props) => {
    const { user, navigateTo } = props;

    return (
        <>
            <UserCardComponent user={user} navigateTo={navigateTo}></UserCardComponent>
        </>);
};
