import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  isNumeric,
  greaterThanZero,
  isGeorgianLetters,
} from "../helpers/customValidators";

const ProductSchema = z.object({
  title: z.object({
    ka: z
      .string()
      .trim()
      .min(2)
      .refine(isGeorgianLetters.validator, {
        message: isGeorgianLetters.message("სათაური"),
      }),
    en: z.string().trim(),
  }),
  description: z.object({
    ka: z
      .string()
      .trim()
      .refine(isGeorgianLetters.validator, {
        message: isGeorgianLetters.message("აღწერა"),
      }),
    en: z.string().trim(),
  }),
  price: z
    .string()
    .refine(isNumeric.validator, {
      message: isNumeric.message,
    })
    .refine(greaterThanZero.validator, {
      message: greaterThanZero.message("ფასი"),
    }),
});

export type ProductSchemaT = z.infer<typeof ProductSchema>;

export const useProductForm = () =>
  useForm<ProductSchemaT>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      title: {
        ka: "",
        en: "",
      },
      description: {
        ka: "",
        en: "",
      },
      price: "",
    },
  });
