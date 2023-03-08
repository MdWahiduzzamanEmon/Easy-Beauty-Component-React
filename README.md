# Easy Beauty Components for React

This is a React component library that contains a lot of components that are used in most of the projects.

## Installation

Use the package manager [npm/yarn](https://www.npmjs.com/) to install the package.((please read the documentation first))

```bash
npm i easy-beauty-components---react

```
```bash
yarn add easy-beauty-components---react

```

## Importing

```
import { For, Show } from "easy-beauty-components---react";
```

```

## How to use it

```
### For Component

```
import { useEffect, useState } from "react";
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
)
}
```

### Show Component

```
import { useEffect, useState } from "react";
function App() {
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

```
```
Also you can FallBack prop to show loading or something else when the condition is false in Show Component


```
 ### Required Props

```
For Component->
of: Array*
```
```
Show Component->
when: Boolean*
FallBack: JSX.Element
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
