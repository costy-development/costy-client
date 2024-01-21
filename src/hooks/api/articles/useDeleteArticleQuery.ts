import { articleStore } from "@/store";
import { NODE_MODE } from "@/config/env";
import { useAppUIContext } from "@/providers/providers";
import { DeleteArticleArgsT } from "@/interface/db/article.types";

export default function useDeleteArticleQuery() {
  const deleteArticle = articleStore.use.deleteArticle();
  const status = articleStore.use.deleteArticleStatus();

  const { activateDialog } = useAppUIContext();

  const onDelete = async (args: DeleteArticleArgsT) => {
    try {
      if (!args.slug) return;
      await deleteArticle(args);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  const onStartDelete = (slug: string) =>
    activateDialog({
      target: "სტატიის",
      message: "დარწმუნებული ხართ გსურთ ამ <TARGET> წაშლა ?",
      title: "სტატიის წაშლა",
      type: "danger",
      onConfirm: () => onDelete({ slug }),
    });

  return { onStartDelete, status };
}
