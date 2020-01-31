import * as React from "react";
import { OrganizationComponent } from "./organization.component";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { LinkedRoutes } from "../../core";
import { memberAPI } from "./member.api";
import { State } from "../../main";
import { connect } from "react-redux";
import { updateOrganizationName, updateOrganizationMembers } from "./store/actions";
import { MemberVm } from "./member.vm";

interface Props extends RouteComponentProps {
    setMembers: (members: MemberVm[]) => void,
    setName: (name:string) => void,
    name: string,
    members: MemberVm[]
}

const mapStateToProps = (state: State) => ({
    name: state.organizationState.name,
    members: state.organizationState.members
});

const mapDispatchToProps = dispatch => ({
    setName: (name: string) => dispatch(updateOrganizationName(name)),
    setMembers: (members:MemberVm[]) => dispatch(updateOrganizationMembers(members)),
})


const OrganizationContainerInner = (props: Props) => {

    const {
        setMembers,
        setName,
        name,
        members,
        history
    } = props

    const onClickUserProfile = (userId: number) => {
        history.push(LinkedRoutes.userProfile(userId));
    }

    const loadMembers = (organization: string) => {
        memberAPI.fetchData(organization).then(members => setMembers(members));
    };

    React.useEffect(() => {
        if (!members.length) {
            loadMembers(name);
        }
    }, []);


    return (<OrganizationComponent
        onClickUserProfile={onClickUserProfile}
        organization={name}
        setOrganization={setName}
        members={members}
        loadMembers={loadMembers}
    />);
};

export const OrganizationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(OrganizationContainerInner));
