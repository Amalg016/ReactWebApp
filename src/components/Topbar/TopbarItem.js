function TopbarItem({ name, highlighted, selectedIndex, setIndex, index }) {
  if (highlighted) {
    return (
      <li style={{ backgroundColor: "#555" }} index={index}>
        {name}
      </li>
    );
  } else {
    return (
      <li index={index} onClick={() => setIndex(index)}>
        {name}
      </li>
    );
  }
}

export default TopbarItem;
