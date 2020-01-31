import * as React from "react";
import { MemberVm } from "./member.vm";
import { SearchInput, MembersTableComponent } from "./components";

interface Props {
  onClickUserProfile: (userId: number) => void;
  organization: string;
  setOrganization: (name: string) => void;
  members: MemberVm[]
  loadMembers: (organizationName: string) => void;
}

export const OrganizationComponent = (props: Props) => {
  const { organization, setOrganization, loadMembers, members, onClickUserProfile } = props;

  return (
    <>
      <SearchInput
        setOrganization={setOrganization}
        loadMembers={loadMembers}
      />
      <MembersTableComponent
        members={members}
        organization={organization}
        onClickUserProfile={onClickUserProfile}
      />
    </>);
};
