import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArticleSchemaT,
  useArticleForm,
} from "@/utils/validations/article/articleSchema";
import { articleStore } from "@/store";
import { PATHS } from "@/config/paths";
import { NODE_MODE } from "@/config/env";

export default function useCreateArticleQuery(slug?: string) {
  const navigate = useNavigate();

  const form = useArticleForm();

  const [isUpdating, setIsUpdating] = useState(false);

  const onStartUpdate = (values: ArticleSchemaT) => {
    form.reset(values);
    setIsUpdating(true);
  };

  const status = articleStore.use.createArticleStatus();
  const createArticle = articleStore.use.createArticle();
  const updateArticle = articleStore.use.updateArticle();

  const onCreate = form.handleSubmit(async (values) => {
    try {
      if (!isUpdating) {
        await createArticle(values);
      } else {
        if (!slug) return;
        await updateArticle({
          slug,
          body: values.body,
          title: values.title,
        });
      }

      form.reset({ title: "", body: "" });
      navigate(PATHS.dashboard_create_article_page);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  });

  return { form, onCreate, onStartUpdate, status };
}
