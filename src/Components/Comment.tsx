import { useState } from 'react';
import './comment.css';
import {CommentType} from './NestedComments'
function Comment({name, tag, created_at, content, likes, dislikes, replies }: {name: string, tag?:string, created_at: string, content: string, likes: number, dislikes: number, replies?:CommentType[] }) {
    const [showReplies, setShowReplies] = useState(false);
    return (
    <div className="comment">
        <div className="comment-header">
            <a href="#">@{name}</a>
            <span className="timeline"> {created_at}</span>
        </div>
        <div className="comment-body">
            <p>
                {tag && <a href="#">@{tag}</a>} {content}
            </p>
            <div>
                <span className="like"><span className="symbol">👍</span>{likes}</span>
                <span className="dislike"><span className="symbol">👎</span>{dislikes}</span>
                <span className="reply-btn">reply</span>
            </div>
            { (replies!==undefined && replies.length>0)  && (
                <>
                        <div onClick={()=>setShowReplies(prev => !prev)}>
                            <span style={{cursor:'pointer'}}>{showReplies ? '🔽':'🔼'}</span> <span  className="replies">replies</span>
                        </div>

                    {showReplies && (
                        <div>
                            {replies.map(reply => <Comment key={reply.id} {...reply}/>)}
                        </div>)
                        }
                    </>
                )
            }
        </div>
    </div>)
}

export default Comment;