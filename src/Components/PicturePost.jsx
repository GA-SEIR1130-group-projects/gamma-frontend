import "../Styling/postStyle.css"
import React from 'react';
import { useState, useEffect } from 'react';

function PicturePost() {
    
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("")

    function addComment(comment) {
        const commentsArr= [...comments, comment];
        setComments(commentsArr);
    }
    
    useEffect(() => {}, []);

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
                    comments.map(comment => {
                        return(
                            <div class="user-comment">
                                <p>user: {comment}</p>
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


