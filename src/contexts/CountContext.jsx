import { createContext, useState, useEffect } from "react";

const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  //recupero i post da un'API (o da una fonte locale)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Errore nel recupero dei post:", err));
  }, []);

  return (
    <CountContext.Provider value={{ posts }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContext;