import { useEffect, useState } from "react";


const Ap = () => {
    const [values, setValues] = useState("")
    const [products, setProducts] = useState([])
    console.log("re-render");
    
    const handleChange = (e) => {
       setValues(e.target.value); 
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchProducts = async () => {
              const response = await fetch(
                `https://dummyjson.com/products/search?q=${values}`
              );
                const data = await response.json();
                setProducts(data.products)
              console.log(data.products);
            };
           
            if (values) fetchProducts();
        }, 1000)
        return() => clearTimeout(timer)
    },[values])


  return (
      <div>
          <input type="text" placeholder="search" onChange={handleChange} />
          {
              products.map((item) => {
                  <div key={item.id}>
                      <h2>{ item.products}</h2>
                  </div>
              })
          }
    </div>
  )
}

export default Ap