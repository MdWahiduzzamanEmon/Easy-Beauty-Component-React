// import lazyLoad from "./lib";

import { useEffect, useState } from "react";
import {For} from "./lib";

// const Home= lazyLoad("./Home/Home","Home")

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      { name: "John", age: 20 },
      { name: "Jane", age: 21 },
      { name: "Jack", age: 22 },
    ]);
  }, []);

  return (
    <div>
      <For of={list}>
        {
          ({ item, index }) => {
            return (
              <li key={index}>
                {item?.name} is {item?.age} years old
              </li>
            )
          }
        }
      </For>
    </div>
  );
}

export default App;
