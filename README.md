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

```bash
import { For, Show } from "easy-beauty-components---react";

```

## How to use it

```bash

### For Component

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

```bash

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

```bash

### Also you can FallBack prop to show loading or something else when the condition is false in Show Component

 ### Required Props

| Prop | Type  | Required |
| ---- | ----- | -------- |
| of   | Array | true     |

```

```bash

| Prop     | Type        | Required |
| -------- | ----------- | -------- |
| when     | Boolean     | true     |
| FallBack | JSX.Element | false    |

```
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Author

- <img align="left" src="https://user-images.githubusercontent.com/83487057/224383152-3d83875a-6e49-46c2-be8f-5d0627e0a27e.png" alt="md-wahiduzzaman-emon" height="40" width="40" /> [Md Wahiduzzaman Emon]

## Contributing

- Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

* Please make sure to update tests as appropriate.