import * as Styled from "./styles/templateListedItem.styled";

type TemplateListedItemT = {
  field: { _id: string; value: string };
  onAddField: (e: React.MouseEvent) => void;
  onRemoveField: (fieldId: string) => void;
};

const TemplateListedItem: React.FC<TemplateListedItemT> = ({
  field,
  onAddField,
  onRemoveField,
}) => {
  return (
    <Styled.TemplateListedItem className="list-item__wrapper">
      <li
        contentEditable
        className="list-item"
        dangerouslySetInnerHTML={{
          __html: field.value,
        }}
      />

      <div className="list-item__actions">
        <button onClick={onAddField}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 21 21"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.5 10.5h10m-5-5v10"
            />
          </svg>
        </button>

        <button
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            onRemoveField(field._id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M5 12h14"
            />
          </svg>
        </button>
      </div>
    </Styled.TemplateListedItem>
  );
};

export default TemplateListedItem;
