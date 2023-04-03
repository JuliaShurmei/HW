import { CircularProgress } from "@mui/material";
import { ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../authContext/authProvider";
import { PostType } from "../posts/posts";

export const SinglePost = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logOut } = useAuth();
  

  const [post, setPost] = useState<PostType>();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.myId}`)
      .then((response) => response.json())
      .then((json) => setPost(json))
      .catch((error) => setError(error.message)) 
      .finally(() => setIsLoading(false));
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const logout = () => {
    logOut(() => navigate("/"));
  };

  const goHomePage = () => {
    navigate("/", {
      replace: true,
      state: { text: "I from post with id", id: params.myId },
    });
  };

  const editPost = () => {
    navigate("edit");
  };
  if (isLoading) {
    return <CircularProgress />;
  }

  console.log("PARAMS", params);
  return (
    
    <div style={{ height: "100vh" }}>
    
      SINGLE POST PAGE WITH ID ={params.myId}
      <h1>TITLE: {post?.title}</h1>
      <h2>BODY : {post?.body}</h2>
      <h3>USER ID: {post?.userId}</h3>
      <button onClick={goBack}>Go back</button>
      <button onClick={goHomePage}>Go to home page</button>
      <button onClick={editPost}>EDIT POST</button>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};
