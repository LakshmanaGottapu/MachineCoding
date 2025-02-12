import { useState, Dispatch } from 'react';
import './comment.css';
import {CommentType,CommentActionType} from './NestedComments'
function Comment({id, name, tag, created_at, content, likes, dislikes, replies, dispatch, videoId }: {id: number, name: string, tag?:string, created_at: string, content: string, likes: number, dislikes: number, replies?:CommentType[], dispatch:Dispatch<CommentActionType>, videoId:number }) {
    const [showReplies, setShowReplies] = useState(false);
    const [showReplyInput, setShowReplyInput] = useState(false);
    // const {video}
    return (
    <div className="comment">
        <div className="comment-header">
            <a href="#">@{name}</a>
            <span className="timeline"> {created_at}</span>
        </div>
        <div className="comment-body">
            <p className="comment-content">
                {tag && <a href="#">@{tag}</a>} {content}
            </p>
            <div>
                <span className="like"><span className="symbol">👍</span>{likes}</span>
                <span className="dislike"><span className="symbol">👎</span>{dislikes}</span>
                <span className="reply-btn" onClick={()=>setShowReplyInput(true)}>reply</span>
                {showReplyInput && <>
                    <input id="reply-content"/>
                    <button onClick={()=>{
                        const textInputElement = document.getElementById('reply-content');
                        if(!textInputElement) return;
                        const inputContent = (textInputElement as HTMLInputElement).value;
                        console.log(inputContent)
                        dispatch({type:'add_comment', videoId, parentId:id, content:inputContent})
                        setShowReplyInput(false)
                    }}>ok</button>
                    <button onClick={()=>setShowReplyInput(false)}>cancel</button>
                </>}
            </div>
            { (replies!==undefined && replies.length>0)  && (
                <>
                        <div onClick={()=>setShowReplies(prev => !prev)}>
                            <span style={{cursor:'pointer'}}>{showReplies ? '🔽':'🔼'}</span> <span  className="replies">replies</span>
                        </div>

                    {showReplies && (
                        <div className='replies-body'>
                            {replies.map(reply => <Comment key={reply.id} {...reply} dispatch={dispatch} videoId={videoId}/>)}
                        </div>)
                        }
                    </>
                )
            }
        </div>
    </div>)
}

export default Comment;