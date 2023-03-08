# React lazy loading function

This is a React hook that allows you to use the lazy loading function in your react app.
Main Concept of this function is to load the component only when it is needed.This package will be helpful if your component have not default export also it will be helpful if you want to lazy load the component which is not in the same folder.

## Installation

Use the package manager [npm/yarn](https://www.npmjs.com/) to install the package.((please read the documentation first))

```bash
npm i react-lazy-loading-func
```
```bash
yarn add react-lazy-loading-func
```

## Importing

```
import lazyLoad from "react-lazy-loading-func";
```

## How to use it

```
lazyLoad(path,componentName)
```
```
const Home= lazyLoad("./Home/Home","Home")

```
```
Here path is the path of the component and componentName
 is the name of the component which you want to import.

```
