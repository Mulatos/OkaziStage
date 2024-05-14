import { useState } from "react";

// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // (items: string) ==> void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   let selectedIndex = 0;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);
  //   items = [];

  //   const getMessage = () => {
  //     return;
  //   }; // function can have paremeters = different messages. Otherwise use a const.
  return (
    // React.createElement('h1')
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
// key={item} you give a unique key, you get there property like id.
// ctrl d to choose mutliple of the same objext (edditing a certain variable like class to className)
export default ListGroup;
