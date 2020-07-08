import React, { useContext } from "react"
import { PostContext } from "../posts/PostProvider"
import { Input } from "reactstrap"

export const SearchBar = () => {
    const { searchPosts } = useContext(PostContext)


    const handleChange = (e) => {
        searchPosts(e.target.value)
    }

    return (
        <div className='container mt-1'>
            <Input type='text' onChange={handleChange} placeholder="Search Posts" />
        </div>
    )
}

