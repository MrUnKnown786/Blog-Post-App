import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: "1",
      title: "Sample Post 1",
      category: "Test 1",
      description: "Sample Post for Testing. Please delete the sample posts and create the new one by clicking New Post Button on Navigation bar.",
    },
    {
      id: "2",
      title: "Sample Post 2",
      category: "Test 2",
      description: "Sample Post for Testing. Please delete the sample posts and create the new one by clicking New Post Button on Navigation bar.",
    },
  ],
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    updateBlog: (state, action) => {
      const { id, title, category, description } = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === (id));
      state.blogs[blogIndex].title = title;
      state.blogs[blogIndex].category = category;
      state.blogs[blogIndex].description = description;
    },
    deleteBlog: (state, action) => {
      const id = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
    },
    toggleLike: (state, action) => {
      const id = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === id);
      state.blogs[blogIndex].isLiked = !state.blogs[blogIndex].isLiked;
    },
  },
});

export const selectBlogById = (state, blogID) => {
  return state.blogs.blogs.find((blog) => blog.id === (blogID));
};

export const { addBlog, updateBlog, deleteBlog, toggleLike } =
  blogSlice.actions;
export default blogSlice.reducer;
