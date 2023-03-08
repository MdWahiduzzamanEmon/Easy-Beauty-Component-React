
const For = ({ of, children }) => {
  if (!of) return null;
  return of.map((item, index) => {
    return children({ item, index });
  });

}

export { For };

//make it in typescript
