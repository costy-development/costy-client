import { ProductT, GetProductsArgsT } from "@/interface/db/product.types";
import { LoadingStatusT } from "@/interface/store/common.types";

type ProductsStateT = {
  hasMore: boolean;
  currentPage: number;
  products: Array<ProductT>;
  status: LoadingStatusT;
};

type ProductsActionsT = {
  getProducts: (query: GetProductsArgsT) => Promise<void>;
  getPaginatedProducts: (query: GetProductsArgsT) => Promise<void>;
  cleanUpProducts: () => void;
};

type ProductsStoreT = ProductsStateT & ProductsActionsT;

export type { ProductsStateT, ProductsStoreT };
