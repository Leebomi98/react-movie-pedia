import { useRef } from "react";

function FileInput({ name, value, onChange }) {
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  // 파일 왜 안열리는지 확인 필요
  return <input type="file" onChange={handleChange} />;
}

export default FileInput;
