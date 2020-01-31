import { MemberVm } from "../member.vm";
import { IAction, actionsIds } from ".";

export interface OrganizationState {
  name: string,
  members: MemberVm[],
  setName: (name: string) => void,
  setMembers: (members: MemberVm[]) => void
}

export const defaultOrganizationState = (): OrganizationState => ({
  name: "lemoncode",
  members: [],
  setName: (name:string) => {},
  setMembers: (member:MemberVm[]) => {}
});

export const organizationReducer = (state = defaultOrganizationState(), action: IAction): OrganizationState => {
  switch (action.type) {
    case actionsIds.UPDATE_ORGANIZATION_NAME:
      return nameActionHandler(state, action.payload);
    case actionsIds.UPDATE_ORGANIZATION_MEMBERS:
      return membersActionHandler(state, action.payload);
    default:
      return state;
  }
};


const nameActionHandler = (state: OrganizationState, name): OrganizationState => ({
  ...state,
  name: name
});

const membersActionHandler = (state: OrganizationState, members): OrganizationState => ({
  ...state,
  members: members
});



