import { useParams } from "react-router";
import Navbar from "./Navbar";

const AddNewPost = () => {
  const { where } = useParams();
  const ArrayOfCategories = [];

  return (
    <>
      <Navbar />
    </>
  );
};
export default AddNewPost;
