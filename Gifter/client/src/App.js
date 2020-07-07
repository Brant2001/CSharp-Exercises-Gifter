import React, { useState } from "react";
import "./App.css";
import { PostProvider } from "./scripts/posts/PostProvider";
import { SearchBar } from "./scripts/search/SearchBar";
import { SearchResults } from "./scripts/search/SearchResults";
import { ApplicationViews } from "./scripts/ApplicationViews";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./scripts/Header";
import { UserProfileProvider } from "./scripts/users/UserProfileProvider";


function App() {
  const [searchTerms, setTerms] = useState(null)
  return (
    <div className="App">
      <Router>
        <UserProfileProvider>
          <PostProvider>
            <Header />
            <div className="search">
              <SearchBar setTerms={setTerms} />
              <SearchResults searchTerms={searchTerms} />
            </div>
            <div className="postPage">
              <ApplicationViews />
            </div>
          </PostProvider>
        </UserProfileProvider>
      </Router>
    </div>
  );
}

export default App;