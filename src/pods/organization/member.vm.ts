export interface MemberVm {
  id: number;
  login: string;
  avatar_url: string;
}

export const createDefaultMemberVm = (): MemberVm => ({
  id: -1,
  login: '',
  avatar_url: '',
});
