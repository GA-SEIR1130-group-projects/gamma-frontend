import "../Styling/postStyle.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { useState, useEffect } from 'react';

const axios = require("axios");



function PicturePost() {
    
    const url = "http://localhost:2000/api/comments";
    
    
    const [newComment, setNewComment] = useState("")
    const [comments, setComments] = useState({
        comments: []
    });

    useEffect(() => {
        getComments()
    }, []);

    function getComments() {
        axios.get(url)
            .then(res => {
                console.log(res);
                setComments({ comments: res.data })
            })
    }

    function addComment(comment) {
        axios.post(url, {
            comment: comment
        })
        getComments()
    }

    function deleteComment(id) {
        axios.delete(`${url}/${id}`);
        getComments()
    }

    function updateComment(id, val) {
        axios.put(`${url}/${id}`, { comment: val })
            .then(() => getComments());
    }

    function handleSubmit(event) {
        event.preventDefault();
        addComment(newComment);
        setNewComment("");
    }

    function handleChange(event) {
        setNewComment(event.target.value);
    }


    return(
        <div className="picture-post">
            <h1>Post Component goes here</h1>

            <div className="picture-section">
                <img src="" alt="Post Picture"/>
            </div>

            <div className="comment-list">
                {
                    comments.comments.map(comment => {
                        return(
                            <div 
                                class="user-comment" 
                                onClick={() => deleteComment(comment._id)}
                            >
                                <p>user: {comment.comment}</p>
                                <button
                                    type="button" class="btn btn-danger"
                                    onClick={() => deleteComment(comment._id)}
                                >Delete</button>
                                <button 
                                    type="button" class="btn btn-info"
                                    onClick={() => updateComment(comment._id, "updated comment")}
                                >Update</button>
                            </div>
                        );
                    })
                }
            </div>

            <form className="add-comment" onSubmit={handleSubmit}>
                <label>Comment:</label>
                <input
                    placeholder="Add a comment..." 
                    type="text"
                    value={newComment}
                    onChange={handleChange}
                />
                <button type="submit">post</button>
            </form>
        </div>
    );
}

export default PicturePost;


