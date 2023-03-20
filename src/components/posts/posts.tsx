import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import PostItem from "./components/postItem";
import { ErrorMessage } from "../error";
import { useAuth } from "../../authContext/authProvider";
import { service } from "../../service";

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const styles = {
  display: "flex",
  marginTop: 20,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100%"
} as const;

export const Posts = () => {
  const [posts, setPosts] = useState<Array<PostType>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const authData = useAuth();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const responce = await service.get("/todos");
      setPosts(responce.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  //   if (isLoading) {
  //     return <CircularProgress />;
  //   }

  return (
    <div style={styles}>
      <h1>HELLO FROM POSTS COMPONENT</h1>
      {error && <ErrorMessage errorField={error} />}
      {isLoading && <CircularProgress />}
      {posts.length > 0 && (
        <div>
          {posts.map((post) => (
            <PostItem key={post.id} info={post} />
          ))}
        </div>
      )}
    </div>
  );
};