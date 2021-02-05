import "../Styling/postStyle.css"
import React from 'react';
import { useState, useEffect } from 'react';

function PicturePost() {
    
    const [comments, setComments] = useState([])

    function addComment(comment) {
        const commentsArr= [...comments, comment];
        setComments(commentsArr);
    }
    
    useEffect(() => {}, []);

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleChange() {

    }

    return(
        <div className="picture-post">
            <h1>Post Component goes here</h1>
            <div className="picture-section">
                <img src="" alt="Post Picture"/>
            </div>

            <div className="comment-section">
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
                <form className="add-comment" action="submit">
                    <label>Comment:</label>
                    <input 
                        type="text"
                        value="comment goes here"
                    />
                    <button type="submit">post</button>
                </form>
            </div>
        </div>
    );
}

export default PicturePost;


