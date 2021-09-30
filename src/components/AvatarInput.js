import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const AvatarInput = ({ values, handleChange }) => {
  const { uploadAvatar } = useAuth();
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      alert("please give us youre avatar");
    }
  };
  const handleUpload = () => {};
  return (
    <>
      Hi
      <input type="file" onChange={handleImage} />
      <button
        onClick={() => {
          uploadAvatar(image, values, handleChange);
        }}
      >
        Upload
      </button>
    </>
  );
};
export default AvatarInput;
