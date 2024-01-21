import { create } from "zustand";
import { AxiosResponse } from "axios";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { PRODUCTS_PER_PAGE } from "@/config/config";
import { axiosPrivateQuery } from "@/services/axios";
import { createSelectors, getStatus } from "@/store/helpers";

import {
  ProductsStateT,
  ProductsStoreT,
} from "@/interface/store/products.store.types";

import {
  GetProductsArgsT,
  GetProductsResponseT,
} from "@/interface/db/product.types";

const initialState: ProductsStateT = {
  products: [],
  currentPage: 0,
  hasMore: false,
  status: getStatus("IDLE"),
};

const useProductsStore = create<ProductsStoreT>()(
  devtools(
    immer((set, getState) => ({
      ...initialState,

      getProducts: async (args: GetProductsArgsT) => {
        try {
          set(() => ({ status: getStatus("PENDING") }));

          const queryStrings = [
            args.query.replace("?", ""),
            `page=${1}&limit=${PRODUCTS_PER_PAGE}`,
          ];

          const queryStr = queryStrings.join(args.query ? "&" : "");

          const {
            data: { data, currentPage, hasMore },
          }: AxiosResponse<GetProductsResponseT> = await axiosPrivateQuery.get(
            `/products?${queryStr}`
          );

          set(() => ({
            hasMore,
            currentPage,
            products: data,
            status: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ productsStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      getPaginatedProducts: async (args: GetProductsArgsT) => {
        try {
          const queryStrings = [
            args.query.replace("?", ""),
            `page=${args.page}&limit=${PRODUCTS_PER_PAGE}`,
          ];

          const queryStr = queryStrings.join(args.query ? "&" : "");

          const {
            data: { data, currentPage, hasMore },
          }: AxiosResponse<GetProductsResponseT> = await axiosPrivateQuery.get(
            `/products?${queryStr}`
          );

          set(() => ({
            hasMore,
            currentPage,
            products: [...getState().products, ...data],
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ productsStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpProducts: () => {
        set(() => ({
          products: initialState.products,
          status: getStatus("IDLE"),
        }));
      },
    }))
  )
);

const productStore = createSelectors(useProductsStore);

export default productStore;
