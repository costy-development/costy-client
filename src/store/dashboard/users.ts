import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { axiosPrivateQuery } from "@/services/axios";
import { USERS_PER_PAGE } from "@/config/config";
import { createSelectors, getStatus } from "@/store/helpers";

import {
  DashboardUserStateT,
  DashboardUsersStoreT,
} from "@/interface/store/dashboard/dashboardUsers.store.types";

import { GetUsersArgsT, GetUsersResponseT } from "@/interface/db/user.types";

const initialState: DashboardUserStateT = {
  users: [],
  currentPage: 0,
  hasMore: false,
  status: getStatus("IDLE"),
};

const useProductsStore = create<DashboardUsersStoreT>()(
  devtools(
    immer((set, getState) => ({
      ...initialState,

      getUsers: async (args: GetUsersArgsT) => {
        try {
          set(() => ({ status: getStatus("PENDING") }));

          const queryStrings = [
            args.query.replace("?", ""),
            `page=${1}&limit=${USERS_PER_PAGE}`,
          ];

          const queryStr = queryStrings.join(args.query ? "&" : "");

          const {
            data: { data, currentPage, hasMore },
          }: AxiosResponse<GetUsersResponseT> = await axiosPrivateQuery.get(
            `/dashboard/users?${queryStr}`
          );

          set(() => ({
            hasMore,
            currentPage,
            users: data,
            status: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ productsStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      getPaginatedUsers: async (args: GetUsersArgsT) => {
        try {
          const queryStrings = [
            args.query.replace("?", ""),
            `page=${args.page}&limit=${USERS_PER_PAGE}`,
          ];

          const queryStr = queryStrings.join(args.query ? "&" : "");

          const {
            data: { data, currentPage, hasMore },
          }: AxiosResponse<GetUsersResponseT> = await axiosPrivateQuery.get(
            `/dashboard/users?${queryStr}`
          );

          set(() => ({
            hasMore,
            currentPage,
            users: [...getState().users, ...data],
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ productsStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpUsers: () => {
        set(() => ({
          users: initialState.users,
          status: getStatus("IDLE"),
        }));
      },
    }))
  )
);

const productStore = createSelectors(useProductsStore);

export default productStore;
