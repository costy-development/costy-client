/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";

import { useCreateArticleQuery } from "@/hooks/api/articles";

import {
  QuillEditor,
  TextareaField,
  RelativeSpinner,
  ErrorMessage,
} from "@/components/Layouts";
import * as Styled from "./styles/createArticle.styled";

import { ArticleT } from "@/interface/db/article.types";

type CreateArticleT = {};

const CreateArticle: React.FC<CreateArticleT> = () => {
  const { state } = useLocation();
  const article: ArticleT | undefined = state?.article;
  const isUpdating = article ? true : false;

  const { form, onCreate, status, onStartUpdate } = useCreateArticleQuery(
    article?.slug || ""
  );

  useEffect(() => {
    if (!article) return;

    onStartUpdate({
      title: article.title,
      body: article.body,
    });
  }, [article]);

  const body = form.getValues("body");

  useEffect(() => {
    const quill = document.querySelector(".ql-container.ql-snow");
    const timeoutId = setTimeout(() => {
      if (!quill) return;

      const images = Array.from(quill.querySelectorAll("img"));

      if (images.length > 0)
        images.forEach((image) => {
          image.setAttribute("loading", "lazy");
        });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [body]);

  return (
    <Styled.CreateArticle>
      <div className="editor-wrapper">
        <Controller
          control={form.control}
          name="title"
          render={({ field }) => (
            <TextareaField
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              placeholder="სათაური"
              rows={2}
            />
          )}
        />

        <Controller
          control={form.control}
          name="body"
          render={({ field }) => (
            <QuillEditor value={field.value} setValue={field.onChange} />
          )}
        />

        {status.error && (
          <ErrorMessage message={status.message} align="center" />
        )}

        <button
          className="publish-btn"
          onClick={onCreate}
          disabled={status.loading}
        >
          {isUpdating ? "განახლება" : "გამოქვეყნება"}
        </button>
      </div>

      {status.loading && <RelativeSpinner />}
    </Styled.CreateArticle>
  );
};

export default CreateArticle;
