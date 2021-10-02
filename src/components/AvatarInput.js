import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const AvatarInput = ({ handleImage }) => {
  return (
    <>
      <input type="file" onChange={handleImage} />
    </>
  );
};
export default AvatarInput;
