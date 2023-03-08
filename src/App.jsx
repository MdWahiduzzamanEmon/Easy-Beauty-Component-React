// import lazyLoad from "./lib";

// const Home= lazyLoad("./Home/Home","Home")
import { useEffect, useState } from "react";

function For({ list, children }) {
  return list.map((item, index) => {
    return children({ item, index });
  });

}

export {For};

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
      <For list={list}>
        {
          ({ item ,index}) => {
            return (
              <li key={index}>
                {item.name} is {item.age} years old
              </li>
              
            )
          }
        }
      </For>
    </div>
  );
}

export default App;
