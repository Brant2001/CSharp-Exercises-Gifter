import React, { useState, useContext } from "react";
import { UserProfileContext } from "../users/UserProfileProvider";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const { getToken } = useContext(UserProfileContext)
    const [posts, setPosts] = useState([]);

    const apiUrl = '/api/post'

    const getAllPosts = () => {
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setPosts));
    };

    const addPost = (post) => {
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            }).then(resp => resp.json())
                .then(setPosts));
    };

    const searchPosts = (searchTerm) => {
        getToken().then((token) =>
            fetch(`/api/post/search?q=${searchTerm}&sortDesc=true`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setPosts));
    }

    const getPost = (id) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setPosts));
    };

    const getPostsByUser = (id) => {
        getToken().then((token) =>
            fetch(apiUrl + `/getbyuser/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setPosts));
    };
    return (
        <PostContext.Provider value={{
            posts, getAllPosts, addPost,
            searchPosts, getPost, getPostsByUser
        }}>
            {props.children}
        </PostContext.Provider>
    );
};