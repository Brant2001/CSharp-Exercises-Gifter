import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { PostList } from "./posts/PostList";
import PostForm from "./posts/PostForm";
import { PostDetails } from "./posts/PostDetails";
import { UserPosts } from "./users/UserPosts";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { UserProfileContext } from "./users/UserProfileProvider";
import { SearchBar } from "./search/SearchBar";

export const ApplicationViews = () => {
    const { isLoggedIn } = useContext(UserProfileContext);

    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    {isLoggedIn ?
                        <div>
                            <SearchBar />
                            <PostList />
                        </div> :
                        <Redirect to="/login" />
                    }
                </Route>

                <Route path="/posts/add">
                    {isLoggedIn ?
                        <div>
                            <PostForm />
                        </div> :
                        <Redirect to="/login" />
                    }
                </Route>

                <Route path='/posts/:id'>
                    {isLoggedIn ?
                        <div>
                            <SearchBar />
                            <PostDetails />
                        </div> :
                        <Redirect to="/login" />
                    }
                </Route>

                <Route path="/users:id">
                    {isLoggedIn ?
                        <div>
                            <SearchBar />
                            <UserPosts />
                        </div> :
                        <Redirect to="/login" />
                    }
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </main>
    );
};

