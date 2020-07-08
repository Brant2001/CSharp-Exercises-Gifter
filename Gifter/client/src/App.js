import React from "react";
import "./App.css";
import { PostProvider } from "./scripts/posts/PostProvider";
import { ApplicationViews } from "./scripts/ApplicationViews";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./scripts/Header";
import { UserProfileProvider } from "./scripts/users/UserProfileProvider";


function App() {
  return (
    <div className="App">
      <Router>
        <UserProfileProvider>
          <PostProvider>
            <Header />
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