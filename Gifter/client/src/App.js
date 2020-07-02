import React from "react";
import "./App.css";
import { PostProvider } from "./scripts/posts/PostProvider";
import PostList from "./scripts/posts/PostList";
import PostForm from "./scripts/posts/PostForm";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostForm />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;