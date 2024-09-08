/**
 *
 *
 */

import { useEffect, useState } from "react";

const Effect = () => {
  const [value, setValue] = useState("");

  console.log("re-render");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
      const timer = setTimeout(() => {
        // make api request
      console.log(value);
    }, 1000);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <>
      <input type="text" placeholder="search" onChange={handleChange} />
      <h2>{value}</h2>
    </>
  );
};

export default Effect;
