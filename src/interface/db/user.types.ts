type UserT = {
  _id: string;
  email: string;
  username: string;
  avatar: string;
};

type GetUsersArgsT = { query: string; page: number };

type GetUsersResponseT = {
  data: Array<UserT>;
  currentPage: number;
  hasMore: boolean;
};

export type { UserT, GetUsersArgsT, GetUsersResponseT };
