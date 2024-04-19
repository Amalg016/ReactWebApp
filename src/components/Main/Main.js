import "./Main.css";
import Record from "./Record";
function Main({ records }) {
  return (
    <div className="recordContainer">
      <ul>
        {records?.map((record, key) => (
          <Record detail={record} key={key} />
        ))}
      </ul>
    </div>
  );
}
export default Main;
