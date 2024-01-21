import {
  ProductT,
  GetProductsArgsT,
  CreateProductArgsT,
  UpdateProductArgsT,
  DeleteProductArgsT,
} from "@/interface/db/product.types";
import { LoadingStatusT } from "@/interface/store/common.types";

type DashboardProductsStateT = {
  products: Array<ProductT>;
  createProductStatus: LoadingStatusT;
  productsStatus: LoadingStatusT;
  deleteProductStatus: LoadingStatusT & {
    productId: string;
  };
  currentPage: number;
  hasMore: boolean;
};

type DashboardProductsActionsT = {
  getProducts: (query: GetProductsArgsT) => Promise<void>;
  getPaginatedProducts: (query: GetProductsArgsT) => Promise<void>;
  cleanUpProducts: () => void;
  createProduct: (args: CreateProductArgsT) => Promise<void>;
  updateProduct: (args: UpdateProductArgsT) => Promise<void>;
  deleteProduct: (args: DeleteProductArgsT) => Promise<void>;
};

type DashboardProductsStoreT = DashboardProductsStateT &
  DashboardProductsActionsT;

export type { DashboardProductsStateT, DashboardProductsStoreT };
