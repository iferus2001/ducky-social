export const PAGES = {
  HOME: "/",
  EXPLORE: "/explore",
  PROFILE_FAKE: "/profile_fake",
  PROFILE(username: string) {
    return `/u/${username}`;
  },
};
