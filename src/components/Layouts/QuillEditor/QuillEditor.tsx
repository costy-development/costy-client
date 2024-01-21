import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { quillConfig as quill } from "@/utils";

type QuillEditorT = {
  readonly?: boolean;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

const QuillEditor: React.FC<QuillEditorT> = ({
  readonly = false,
  value = "",
  setValue,
}) => {
  const onChange = (value: string) => {
    setValue && setValue(value);
  };

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      {...quill}
      theme={readonly ? "bubble" : quill.theme}
      readOnly={readonly}
      id="quill"
    />
  );
};

export default QuillEditor;
