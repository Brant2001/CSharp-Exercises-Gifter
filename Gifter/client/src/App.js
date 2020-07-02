import React, { useState } from "react";
import "./App.css";
import { PostProvider } from "./scripts/posts/PostProvider";
import PostList from "./scripts/posts/PostList";
import PostForm from "./scripts/posts/PostForm";
import { SearchBar } from "./scripts/search/SearchBar";
import { SearchResults } from "./scripts/search/SearchResults";

const [searchTerms, setTerms] = useState()

function App() {
  return (
    <div className="App">
      <div className="search">
        <SearchBar setTerms={setTerms} />
        <SearchResults searchTerms={searchTerms} />
      </div>
      <div className="postPage">
        <PostProvider>
          <PostForm />
          <PostList />
        </PostProvider>
      </div>
    </div>
  );
}

export default App;