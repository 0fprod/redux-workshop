import * as React from "react";
import { UserProfileComponent } from "./user-profile.component";
import { UserProfileVm } from "./user-profile.vm";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { userProfileAPI } from "./user-profile.api";
import { SwitchRoutes } from "../../core";
import { State } from "../../main";
import { updateUpserProfile } from "./store/actions";
import { connect } from "react-redux";

interface Props extends RouteComponentProps {
    userProfile: UserProfileVm,
    setUserProfile: (user: UserProfileVm) => void;
}

const mapStateToProps = (state: State) => ({
    userProfile: state.userProfileState.userProfile
})

const mapDispatchToProps = dispatch => ({
    setUserProfile: (user: UserProfileVm) => dispatch(updateUpserProfile(user))
})

const UserProfileContainerInner = (props: Props) => {

    const userId = props.match.params['id'];
    // const [user, setUser] = React.useState(createDefaultUserProfileVm());
    const { setUserProfile, userProfile, history } = props;

    const navigateToOrganization = () => {
        history.push(SwitchRoutes.root);
    }

    const loadUser = (userId: number) => {
        userProfileAPI.fetchData(userId).then((user) => setUserProfile(user));
    }

    React.useEffect(() => {
        loadUser(userId);
    }, [])

    return <UserProfileComponent user={userProfile} navigateTo={navigateToOrganization} />;
};

export const UserProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(UserProfileContainerInner));