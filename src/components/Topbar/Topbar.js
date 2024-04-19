import "./Topbar.css";
import TopbarItem from "./TopbarItem";
function Topbar({ items, selectedIndex, setIndex }) {
  return (
    <div className="topbar">
      <div className="logo">Logo</div>
      <div className="topbar-items">
        <ul>
          {items.map((item, index) => (
            <TopbarItem
              name={item}
              highlighted={index === selectedIndex ? true : false}
              setIndex={setIndex}
              key={index}
              index={index}
            />
          ))}
        </ul>
      </div>
      <button className="add-button">Add Item</button>
    </div>
  );
}

export default Topbar;
