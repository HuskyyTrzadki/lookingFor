import AnimatedGrid from "./AnimatedGrid";
import Circle from "./Circle/Circle";

const StartingPageInit = () => {
  return (
    <div className="startingPage">
      <nav className="navbar"></nav>
      <AnimatedGrid />
      <Circle />
    </div>
  );
};
export default StartingPageInit;
