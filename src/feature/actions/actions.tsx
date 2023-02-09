import Action from "../action/action";
import Display from "../display/display";

function Actions() {
  return (
    <div className="actions">
      <Display />
      <Action actionToShow="Call" />
      <Action actionToShow="Hang" />
    </div>
  );
}
export default Actions;
