import PostItem from "./components/postItem";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../authContext/authProvider";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { CircularProgress } from "@mui/material";
import { ErrorMessage } from "../error";
import { useEffect } from "react";
import { getPosts } from "../../redux/reducers/postReducer";

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const styles = {
  display: "flex",
  marginTop: 80,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
} as const;

export const Posts = () => {
  const authData = useAuth();

  const likedPosts = useAppSelector((state) => state.favorite.liked);

  console.log("LIKED POSTS", likedPosts);
  // const posts = useSelector((state: RootState) => state.test.posts);
  const error = useAppSelector((state) => state.post.error);
  const isLoading = useAppSelector((state) => state.post.loading);

  const posts = useAppSelector((state) => state.post.posts);

  console.log("POSTS FROM STORE", posts);

  const navigate = useNavigate();

  return (
    <div style={styles}>
      <h1>HELLO FROM POSTS COMPONENT</h1>
      <p>
        <h2>Go to liked posts</h2>
      </p>
      {error ? <ErrorMessage errorField={error} /> : null}
      <button onClick={() => navigate("/about-us")}>Navigate</button>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          {posts.map((post: any) => (
            <PostItem type="main" key={post.id} info={post} />
          ))}
        </div>
      )}
    </div>
  );
};