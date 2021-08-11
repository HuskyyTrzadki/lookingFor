function Circle() {
  return (
    <div className="loginCircle">
      <button id="fb" className="quarter"></button>
      <button id="mail" className="quarter"></button>
      <button id="decline" className="half">
        {" "}
        <p>no, maybe later</p>
      </button>
    </div>
  );
}
export default Circle;
