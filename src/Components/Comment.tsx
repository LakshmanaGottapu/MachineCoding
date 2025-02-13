import { useState, useRef, Dispatch } from 'react';
import './comment.css';
import { CommentType, CommentActionType } from './NestedComments'
function Comment({ id, name, tag, created_at, content, likes, dislikes, replies, dispatch, videoId }: { id: number, name: string, tag?: string, created_at: string, content: string, likes: number, dislikes: number, replies?: CommentType[], dispatch: Dispatch<CommentActionType>, videoId: number }) {
    const [showReplies, setShowReplies] = useState(false);
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [enableEdit, setEnableEdit] = useState(false);
    const editRef = useRef(null);
    const replyRef = useRef(null);
    return (
        <div className="comment">
            <div className="comment-header">
                <a href="#">@{name}</a>
                <span className="timeline"> {created_at}</span>
                <span style={{float:'right', cursor:'pointer'}} onClick={()=>dispatch({ type: 'delete_comment', videoId, parentId: id, content })}>delete</span>
                <span style={{float:'right', cursor:'pointer'}} onClickCapture={()=>setEnableEdit(true)}>edit</span>
            </div>
            <div className="comment-body">
                <div className="comment-content">
                    {tag && <a href="#">@{tag} </a>}  
                    { enableEdit ? (
                        <>
                            <textarea id="edit-content" ref={editRef} defaultValue={content} autoFocus cols={50} rows={6} />
                            <div>
                                <button onClick={() => {
                                    const textInputElement = editRef.current;
                                    if (!textInputElement) return;
                                    const editedContent = (textInputElement as HTMLInputElement).value;
                                    setEnableEdit(false)
                                    if(editedContent==null || editedContent==='' || editedContent===content) return;
                                    dispatch({ type: 'edit_comment', videoId, parentId: id, content: editedContent })
                                }}>
                                    ok
                                </button>
                                <button onClick={() => setEnableEdit(false)}>cancel</button>
                            </div>
                        </>)
                        :
                        content
                    }
                </div>
                <div>
                    <span className="like"><span className="symbol">👍</span>{likes}</span>
                    <span className="dislike"><span className="symbol">👎</span>{dislikes}</span>
                    <span className="reply-btn" onClick={() => setShowReplyInput(true)}>reply</span>
                </div>
                {showReplyInput && <div>
                    <input id="reply-content" ref={replyRef} autoFocus />
                    <button onClick={() => {
                        const textInputElement = replyRef.current;
                        if (!textInputElement) return;
                        const inputContent = (textInputElement as HTMLInputElement).value;
                        console.log(inputContent)
                        dispatch({ type: 'add_reply', videoId, parentId: id, content: inputContent })
                        setShowReplyInput(false)
                    }}>ok</button>
                    <button onClick={() => setShowReplyInput(false)}>cancel</button>
                </div>}
                {(replies !== undefined && replies.length > 0) && (
                    <>
                        <div onClick={() => setShowReplies(prev => !prev)}>
                            <span style={{ cursor: 'pointer' }}>{showReplies ? '🔽' : '🔼'}</span> <span className="replies">replies</span>
                        </div>

                        {showReplies && (
                            <div className='replies-body'>
                                {replies.map(reply => <Comment key={reply.id} {...reply} dispatch={dispatch} videoId={videoId} />)}
                            </div>)
                        }
                    </>
                )
                }
            </div>
        </div>)
}

export default Comment;