import React, { useState, useContext, useEffect } from "react"
import { PostContext } from "../posts/PostProvider"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import { Post } from "../posts/Post";

export const SearchResults = ({ searchTerms }) => {
    const { posts } = useContext(PostContext)
    const [filteredPosts, setFiltered] = useState([])
    const [selectedPost, setPost] = useState({
        post: {}
    })

    // Toggle details modal
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = posts.filter(post => post.title.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, posts])

    return (
        <div className="searchResults">
            <h3>Results</h3>
            <div className="posts">
                {
                    filteredPosts.map(post => <div
                        className="fakeLink href"
                        onClick={() => {
                            setPost(post)
                            toggle()
                        }}
                    >{post.title}</div>)
                }
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {selectedPost.title}
                </ModalHeader>
                <ModalBody>
                    <Post key={selectedPost.id} post={selectedPost} />
                </ModalBody>
            </Modal>
        </div>
    )
}