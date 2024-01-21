import { NODE_MODE } from "@/config/env";
import { productsStore } from "@/store/dashboard";
import { DeleteProductArgsT } from "@/interface/db/product.types";

export default function useDeleteProductQuery() {
  const deleteProduct = productsStore.use.deleteProduct();
  const status = productsStore.use.deleteProductStatus();

  const onDelete = async (args: DeleteProductArgsT) => {
    try {
      if (!args.productId) return;
      await deleteProduct(args);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  return { onDelete, status };
}
