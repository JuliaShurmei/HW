import { useAppSelector } from "../redux/store";
import PostItem from "./posts/components/postItem";

export const Favorites = () => {
  const likedPosts = useAppSelector((state) => state.favorite.liked);
  console.log("FROM FAVORITE COMPONENT", likedPosts);
  return (
    <div
      style={{
        borderRadius: 8,
        marginTop: 20,
      }}
    >
      {!likedPosts.length ? (
        <h1>Вы еще ничего не добавили!</h1>
      ) : (
        <div>
          {likedPosts.map((post: any) => (
            <PostItem type="favorite" key={post.id} info={post} />
          ))}
        </div>
      )}
    </div>
  );
};