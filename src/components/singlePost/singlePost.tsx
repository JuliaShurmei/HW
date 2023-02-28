import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SinglePost = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.myId}`)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  console.log("PARAMS", params);
  return <div style={{ height:"100vh" }}>SINGLE POST PAGE WITH ID ={params.myId}</div>;
};

