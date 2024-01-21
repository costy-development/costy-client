import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { PATHS } from "@/config/paths";
import { axiosPrivateQuery } from "@/services/axios";
import { createSelectors, getStatus } from "@/store/helpers";
import { RouterHistory, PRODUCTS_PER_PAGE } from "@/config/config";

import {
  DashboardProductsStateT,
  DashboardProductsStoreT,
} from "@/interface/store/dashboard/dashboardProducts.store.types";

import {
  GetProductsArgsT,
  GetProductsResponseT,
  CreateProductArgsT,
  UpdateProductArgsT,
  DeleteProductArgsT,
} from "@/interface/db/product.types";

const initialState: DashboardProductsStateT = {
  products: [],
  currentPage: 0,
  hasMore: false,
  productsStatus: getStatus("IDLE"),
  createProductStatus: getStatus("IDLE"),
  deleteProductStatus: { ...getStatus("IDLE"), productId: "" },
};

const useProductsStore = create<DashboardProductsStoreT>()(
  devtools(
    immer((set, getState) => ({
      ...initialState,

      createProduct: async (args: CreateProductArgsT) => {
        try {
          set(() => ({ createProductStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.post("/dashboard/products", args);

          set(() => ({ createProductStatus: getStatus("IDLE") }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ createProductStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      updateProduct: async (args: UpdateProductArgsT) => {
        try {
          set(() => ({ createProductStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.put(
            `/dashboard/products/${args.productId}`,
            args.data
          );

          set(() => ({ createProductStatus: getStatus("IDLE") }));

          RouterHistory.navigate(PATHS.dashboard_products_page);
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ createProductStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      deleteProduct: async (args: DeleteProductArgsT) => {
        try {
          set(() => ({
            deleteProductStatus: {
              ...getStatus("PENDING"),
              productId: args.productId,
            },
          }));

          await axiosPrivateQuery.delete(
            `/dashboard/products/${args.productId}`
          );

          const filteredProducts = [...getState().products].filter(
            (product) => product._id !== args.productId
          );

          set(() => ({
            products: filteredProducts,
            deleteProductStatus: {
              ...getStatus("IDLE"),
              productId: args.productId,
            },
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({
            deleteProductStatus: {
              ...getStatus("FAIL", message),
              productId: args.productId,
            },
          }));
          throw error;
        }
      },

      getProducts: async (args: GetProductsArgsT) => {
        try {
          set(() => ({ productsStatus: getStatus("PENDING") }));

          const queryStrings = [
            args.query.replace("?", ""),
            `page=${1}&limit=${PRODUCTS_PER_PAGE}`,
          ];

          const queryStr = queryStrings.join(args.query ? "&" : "");

          const {
            data: { data, currentPage, hasMore },
          }: AxiosResponse<GetProductsResponseT> = await axiosPrivateQuery.get(
            `/dashboard/products?${queryStr}`
          );

          set(() => ({
            hasMore,
            currentPage,
            products: data,
            productsStatus: getStatus("SUCCESS"),
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
            `/dashboard/products?${queryStr}`
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
          productsStatus: getStatus("IDLE"),
        }));
      },
    }))
  )
);

const productStore = createSelectors(useProductsStore);

export default productStore;
