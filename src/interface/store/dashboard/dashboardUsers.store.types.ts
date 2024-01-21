import { UserT, GetUsersArgsT } from "@/interface/db/user.types";
import { LoadingStatusT } from "@/interface/store/common.types";

type DashboardUserStateT = {
  hasMore: boolean;
  currentPage: number;
  users: Array<UserT>;
  status: LoadingStatusT;
};

type DashboardUserActionsT = {
  getUsers: (query: GetUsersArgsT) => Promise<void>;
  getPaginatedUsers: (query: GetUsersArgsT) => Promise<void>;
  cleanUpUsers: () => void;
};

type DashboardUsersStoreT = DashboardUserStateT & DashboardUserActionsT;

export type { DashboardUserStateT, DashboardUsersStoreT };
