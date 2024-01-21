import { useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useAppUIContext } from "@/providers/providers";
import { useDeleteProductQuery } from "@/hooks/api/products/dashboard";

import { RelativeSpinner, ErrorMessage } from "@/components/Layouts";

import { ProductT } from "@/interface/db/product.types";

type CardActionsT = {
  product: ProductT;
};

const CardActions: React.FC<CardActionsT> = ({ product }) => {
  const navigate = useNavigate();
  const { activateDialog } = useAppUIContext();

  const { onDelete, status } = useDeleteProductQuery();

  const onUpdate = () =>
    navigate(PATHS.dashboard_products_create_page, { state: { product } });

  const onStartDelete = () => {
    activateDialog({
      target: "პროდუქტი",
      message: "დარწმუნებული ხართ გსურთ წაშალოთ ეს <TARGET>",
      onConfirm: () => onDelete({ productId: product._id }),
      type: "danger",
      title: "პროდუქტის წაშლა",
    });
  };

  const isCurrentCard = product._id === status.productId;

  return (
    <>
      <div className="product-card__actions">
        <button onClick={onUpdate}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="-5 -5 28 28"
          >
            <path
              fill="currentColor"
              d="m5.72 14.456l1.761-.508l10.603-10.73a.456.456 0 0 0-.003-.64l-.635-.642a.443.443 0 0 0-.632-.003L6.239 12.635zM18.703.664l.635.643c.876.887.884 2.318.016 3.196L8.428 15.561l-3.764 1.084a.901.901 0 0 1-1.11-.623a.915.915 0 0 1-.002-.506l1.095-3.84L15.544.647a2.215 2.215 0 0 1 3.159.016zM7.184 1.817c.496 0 .898.407.898.909a.903.903 0 0 1-.898.909H3.592c-.992 0-1.796.814-1.796 1.817v10.906c0 1.004.804 1.818 1.796 1.818h10.776c.992 0 1.797-.814 1.797-1.818v-3.635c0-.502.402-.909.898-.909s.898.407.898.91v3.634c0 2.008-1.609 3.636-3.593 3.636H3.592C1.608 19.994 0 18.366 0 16.358V5.452c0-2.007 1.608-3.635 3.592-3.635z"
            />
          </svg>
        </button>

        <button onClick={onStartDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
          >
            <path
              fill="currentColor"
              d="M11.5 6h5a2.5 2.5 0 0 0-5 0M10 6a4 4 0 0 1 8 0h6.25a.75.75 0 0 1 0 1.5h-1.31l-1.217 14.603A4.25 4.25 0 0 1 17.488 26h-6.976a4.25 4.25 0 0 1-4.235-3.897L5.06 7.5H3.75a.75.75 0 0 1 0-1.5zM7.772 21.978a2.75 2.75 0 0 0 2.74 2.522h6.976a2.75 2.75 0 0 0 2.74-2.522L21.436 7.5H6.565zM11.75 11a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75m5.25.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0z"
            />
          </svg>
        </button>
      </div>

      {status.error && isCurrentCard && (
        <ErrorMessage message={status.message} />
      )}

      {status.loading && isCurrentCard && <RelativeSpinner />}
    </>
  );
};

export default CardActions;
