export interface UserProfileVm {
  login: string;
  id: number;
  avatar_url: string; // "https://github.com/images/error/octocat_happy.gif",
  url: string; // "https://api.github.com/users/octocat",
  name: string; // "monalisa octocat",
  blog: string; // "https://github.com/blog",
  location: string; // "San Francisco",
  email: string; // "octocat@github.com",
  bio: string; // "There once was...",
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

export const createDefaultUserProfileVm = (): UserProfileVm => ({
  login: '',
  id: -1,
  avatar_url: '',
  url: '',
  name: '',
  blog: '',
  location: '',
  email: '',
  bio: '',
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0
})

