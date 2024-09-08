/**
 * In the normal case of debouncing it will work fine like if user type something then it will re-render and make only one request
 * But if we want to perform more operations where I need to use state then in this case I can not put debounce, debounced and make request functions outside because
 * if I do this then I can not use state so for resolving that issue I need to use => useEffect hook
 *
 * check Effect.jsx
 *
 */

import { useState } from "react";

const debounce = (fn, delay = 1000) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const makeRequest = (value) => {
  console.log(value);
};

const debounced = debounce(makeRequest, 1000);

const Normal = () => {
  const [value, setValue] = useState("");

  console.log("re-render");

  const handleChange = (e) => {
    setValue(e.target.value);
    debounced(e.target.value);
  };

  return (
    <>
      <input type="text" placeholder="search" onChange={handleChange} />
      <h2>{value}</h2>
    </>
  );
};

export default Normal;
