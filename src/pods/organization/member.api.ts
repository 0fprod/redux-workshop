import { MemberVm, createDefaultMemberVm } from "./member.vm";
import { PARAMETER_FLAG, BaseAPI } from "../../core";

class MemberAPI extends BaseAPI<MemberVm[]> {

  dataMapper(data: any): Promise<MemberVm[]> {
    const members = data.map(gitHubMember => {
      var member: MemberVm = createDefaultMemberVm();

      member.id = gitHubMember.id;
      member.login = gitHubMember.login;
      member.avatar_url = gitHubMember.avatar_url;

      return member;
    });

    return Promise.resolve(members);
  }
}

const gitHubMembersUrl: string = `https://api.github.com/orgs/${PARAMETER_FLAG}/members`;
export const memberAPI = new MemberAPI(gitHubMembersUrl);
