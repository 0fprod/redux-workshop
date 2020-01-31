import { actionsIds, IAction } from ".";
import { MemberVm } from "../member.vm";

export const updateOrganizationName = (newName: string): IAction => ({
  type: actionsIds.UPDATE_ORGANIZATION_NAME,
  payload: newName
});

export const updateOrganizationMembers = (members: MemberVm[]) : IAction =>
({
  type: actionsIds.UPDATE_ORGANIZATION_MEMBERS,
  payload: members
})
