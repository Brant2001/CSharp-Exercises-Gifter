import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { PostContext } from "../posts/PostProvider";
import { useParams } from "react-router-dom";
import { Post } from "../posts/Post";

export const UserPosts = () => {
    const [post, setPost] = useState();
    const [posts, getByUserProfileId] = useContext(PostContext);
    const { id } = useParams();

    useEffect(() => {
        getByUserProfileId(id).then(setPost);
    }, []);

    if (!post) {
        return null;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                    <ListGroup>
                        {post.comments.map((c) => (
                            <ListGroupItem key={post.id}> {c.message}</ListGroupItem>
                        ))}
                    </ListGroup>
                </div>
            </div>
        </div>
    );
};

