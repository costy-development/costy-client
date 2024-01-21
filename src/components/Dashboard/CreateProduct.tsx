/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Controller } from "react-hook-form";

import { useCreateProductQuery } from "@/hooks/api/products/dashboard";

import * as Styled from "./styles/createProduct.styled";
import { TextField, RelativeSpinner, ErrorMessage } from "@/components/Layouts";

import { ProductT } from "@/interface/db/product.types";

const CreateProduct: React.FC = () => {
  const { state } = useLocation();
  const product: ProductT | undefined = state?.product;
  const isUpdating = product ? true : false;

  const { form, onStartUpdate, onCreate, status } = useCreateProductQuery(
    product?._id || ""
  );

  useEffect(() => {
    if (!product) return;

    onStartUpdate({
      title: product.title,
      price: product.price.toString(),
      description: {
        ka: product.description?.ka || "",
        en: product.description?.en || "",
      },
    });
  }, [product]);

  return (
    <Styled.CreateProduct>
      <span className="add-product__title">
        {isUpdating ? "პროდუქტის განახლება" : "პროდუქტის დამატება"}
      </span>

      <form className="product-form">
        <Controller
          control={form.control}
          name="title.ka"
          render={({ field, fieldState: { error } }) => (
            <TextField
              fieldProps={field}
              label="სათაური *"
              hasError={error ? true : false}
              message={error?.message || ""}
            />
          )}
        />

        <Controller
          control={form.control}
          name="description.ka"
          render={({ field, fieldState: { error } }) => (
            <TextField
              fieldProps={field}
              label="აღწერა"
              hasError={error ? true : false}
              message={error?.message || ""}
            />
          )}
        />

        <Controller
          control={form.control}
          name="price"
          render={({ field, fieldState: { error } }) => (
            <TextField
              fieldProps={field}
              label="ფასი *"
              type="number"
              hasError={error ? true : false}
              message={error?.message || ""}
            />
          )}
        />

        {status.error && <ErrorMessage message={status.message} />}

        {status.loading && <RelativeSpinner />}

        <button
          type="button"
          onClick={onCreate}
          className="add-product__confirm-btn"
          disabled={status.loading}
        >
          {isUpdating ? "განახლება" : "დამატება"}
        </button>
      </form>
    </Styled.CreateProduct>
  );
};

export default CreateProduct;
