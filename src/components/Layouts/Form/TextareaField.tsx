import * as Styled from "./form.styled";

type TextareaFieldT = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & React.ComponentProps<"textarea">;

const TextareaField: React.FC<TextareaFieldT> = ({
  name,
  onChange,
  value,
  ...textareaProps
}) => {
  return (
    <Styled.TextareaField>
      <textarea
        {...textareaProps}
        name={name}
        value={value}
        onChange={onChange}
        className="text-field__input"
      />
    </Styled.TextareaField>
  );
};

export default TextareaField;
