import z from "zod";

const TemplateOneSchema = z
  .object({
    isSelectedAll: z.boolean(),
    emails: z.array(z.string().email()),
    title: z.string().min(1, "გთხოვთ შეიყვანოთ სათაური"),
    subTitle: z.string().min(1, "გთხოვთ შეიყვანოთ ქვესათაური"),
    message: z.string().min(1, "გთხოვთ შეიყვანოთ მესიჯი"),
  })
  .refine(
    (data) => {
      if (!data.isSelectedAll && !data.emails[0]) return false;
      else return true;
    },
    { message: "გთხოვთ მიუთითოთ ადრესატები", path: ["emails"] }
  );

const TemplateTwoSchema = z
  .object({
    isSelectedAll: z.boolean(),
    emails: z.array(z.string().email()),
    title: z.string().min(1, "გთხოვთ შეიყვანოთ სათაური"),
    titleSecondary: z.string().min(1, "გთხოვთ შეიყვანოთ მეორადი სათაური"),
    subTitle: z.string().min(1, "გთხოვთ შეიყვანოთ ქვესათაური"),
    message: z.string().min(1, "გთხოვთ შეიყვანოთ მესიჯი"),
  })
  .refine(
    (data) => {
      if (!data.isSelectedAll && !data.emails[0]) return false;
      else return true;
    },
    { message: "გთხოვთ მიუთითოთ ადრესატები", path: ["emails"] }
  );

const TemplateThreeSchema = z
  .object({
    isSelectedAll: z.boolean(),
    emails: z.array(z.string().email()),
    title: z.string().min(1, "გთხოვთ შეიყვანოთ სათაური"),
    list: z
      .array(z.string().min(1, "გთხოვთ შეავსეთ ველი"))
      .nonempty("გთხოვ შეიყვანოთ მინ:1 წინდადება"),
  })
  .refine(
    (data) => {
      if (!data.isSelectedAll && !data.emails[0]) return false;
      else return true;
    },
    { message: "გთხოვთ მიუთითოთ ადრესატები", path: ["emails"] }
  );

const TemplateFourSchema = z
  .object({
    isSelectedAll: z.boolean(),
    emails: z.array(z.string().email()),
    title: z.string().min(1, "გთხოვთ შეიყვანოთ სათაური"),
  })
  .refine(
    (data) => {
      if (!data.isSelectedAll && !data.emails[0]) return false;
      else return true;
    },
    { message: "გთხოვთ მიუთითოთ ადრესატები", path: ["emails"] }
  );

export {
  TemplateOneSchema,
  TemplateTwoSchema,
  TemplateThreeSchema,
  TemplateFourSchema,
};
