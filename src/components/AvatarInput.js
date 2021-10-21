const AvatarInput = ({ handleImage }) => {
  return (
    <>
      <input type="file" onChange={handleImage} />
    </>
  );
};
export default AvatarInput;
