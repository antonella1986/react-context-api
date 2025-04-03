import { createContext, useState, useEffect } from "react";

const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  //recupero i post dall'endpoint
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Errore nel recupero dei post:", err));
  }, []);

  return (
    //passo la variabile posts al provider per poterla usare nelle pagine
    <CountContext.Provider value={{ posts }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContext;