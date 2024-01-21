import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  ProductSchemaT,
  useProductForm,
} from "@/utils/validations/products/productSchema";
import { productsStore } from "@/store/dashboard";
import { NODE_MODE } from "@/config/env";

export default function useCreateProductQuery(productId?: string) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const form = useProductForm();

  const [isUpdating, setIsUpdating] = useState(false);

  const onStartUpdate = (values: ProductSchemaT) => {
    form.reset(values);
    setIsUpdating(true);
  };

  const status = productsStore.use.createProductStatus();
  const createProduct = productsStore.use.createProduct();
  const updateProduct = productsStore.use.updateProduct();

  const onCreate = form.handleSubmit(async (values) => {
    try {
      if (!isUpdating) {
        await createProduct(values);
      } else {
        if (!productId) return;
        await updateProduct({ productId, data: values });
      }

      form.reset();
      navigate(pathname);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  });

  return { form, onCreate, onStartUpdate, status };
}
