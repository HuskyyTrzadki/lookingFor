const AvatarInput = ({ handleImage }) => {
  return (
    <>
      dodaj swoje zdjecie:
      <input type="file" onChange={handleImage} />
    </>
  );
};
export default AvatarInput;
