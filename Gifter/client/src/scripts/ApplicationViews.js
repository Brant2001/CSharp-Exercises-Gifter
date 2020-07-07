import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { PostList } from "./posts/PostList";
import PostForm from "./posts/PostForm";
import { PostDetails } from "./posts/PostDetails";
import { UserPosts } from "./users/UserPosts";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { UserProfileContext } from "./users/UserProfileProvider";

export const ApplicationViews = () => {
    const { isLoggedIn } = useContext(UserProfileContext);

    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/add">
                    {isLoggedIn ? <PostForm /> : <Redirect to="/login" />}
                </Route>

                <Route path="/add">
                    {isLoggedIn ? <PostDetails /> : <Redirect to="/login" />}
                </Route>

                <Route path="/add">
                    {isLoggedIn ? <UserPosts /> : <Redirect to="/login" />}
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

