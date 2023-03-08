// import lazyLoad from "./lib";

import { useEffect, useState } from "react";
import { For, Show } from "./lib/index.js";


// const Home= lazyLoad("./Home/Home","Home")

function App() {
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setList([
  //       { name: "John", age: 20 },
  //       { name: "Jane", age: 21 },
  //       { name: "Jack", age: 22 },
  //     ]);
  //   }, 3000);

  // }, []);

  // return (
  //   <Show
  //     when={
  //       list.length > 0
  //     }
  //     FallBack={
  //       <div>
  //         <h1>Loading...</h1>
  //       </div>
  //     }
  //   >
  //     <For of={list}>
  //       {
  //         ({ item, index }) => {
  //           return (
  //             <li key={index}>
  //               {item?.name} is {item?.age} years old
  //             </li>
  //           )
  //         }
  //       }
  //     </For>
  //   </Show>
  // );
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <Show when={show}>
        <h1>Hello World</h1>
      </Show>
    </div>
  );
}

export default App;
