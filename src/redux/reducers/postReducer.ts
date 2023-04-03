import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { PostType } from "../../components/posts/posts";
import { service } from "../../service";

export type InitialStateType = {
  posts: Array<PostType>;
  loading: boolean;
  error: string | null | unknown;
};

export type AddPostsType = Array<PostType>;

export type RemovePostType = {
  id: number;
};

const initialState: InitialStateType = {
  posts: [],
  loading: false,
  error: null,
};

export const getPosts = createAsyncThunk<Array<PostType>, void>(
  "posts/getPosts",
  async function (_, { rejectWithValue }) {
    try {
      const responce = await service.get("/posts");

      return responce.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const removePostItem: any = createAsyncThunk<any, number>(
  "posts/removePost",
  async function (idItem, { rejectWithValue, dispatch }) {
    console.log("ITEM ID FOR REMOVE", idItem);
    try {
      await service.delete(`/posts/${idItem}`);

      dispatch(removePost({ id: idItem }));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<AddPostsType>) => {
      state.posts = action.payload;
    },
    removePost: (state, action: PayloadAction<RemovePostType>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(removePostItem.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removePostItem.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(removePostItem.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { addPosts, removePost } = postSlice.actions;

export const postReducer = postSlice.reducer;