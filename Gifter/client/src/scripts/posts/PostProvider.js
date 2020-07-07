import React, { useState, useContext } from "react";
import { UserProfileContext } from "../users/UserProfileProvider";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const { getToken } = useContext(UserProfileContext);

    const getAllPosts = () => {
        return fetch("/api/post")
            .then((res) => res.json())
            .then(setPosts);
    };

    const addPost = (post) => {
        getToken().then((token) =>
            fetch("api/post", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post),
            }).then(getAllPosts)
        )
    };

    const getPost = (id) => {
        return fetch(`/api/post/${id}`).then((res) => res.json());
    };

    const getByUserProfileId = (userProfileId) => {
        return fetch(`/api/post/${userProfileId}`).then((res) => res.json());
    };

    const searchPosts = (searchTerm) => {
        return fetch(`/api/post/search?q=${searchTerm}&sortDesc=true`)
    }
    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost, getPost, getByUserProfileId, searchPosts }}>
            {props.children}
        </PostContext.Provider>
    );
};