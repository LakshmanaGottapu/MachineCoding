import { useReducer, useRef } from 'react';
import Comment from './Comment';
import { useParams } from 'react-router-dom';
export type CommentType = { 
    id: number,
    parentId?:number,
    name: string,
    tag?:string,
    created_at: string,
    content: string,
    likes: number,
    dislikes: number,
    replies?: CommentType[]};
const data:CommentType[] = [
    {
        id: 1,
        name: 'lakshman',
        created_at: ' 1 year ago',
        content: 'you are the best sir',
        likes: 10,
        dislikes: 2,
        replies: [
            {
                id:2,
                parentId:1,
                name: 'prasanth',
                tag:'sai',
                created_at: '1 year ago',
                content: 'you said the words in my heart',
                likes: 2,
                dislikes: 0,
                replies:[
                    {
                        id:3,
                        parentId:2,
                        name: 'lakshman',
                        created_at: '1 year ago',
                        content: 'thank you',
                        likes: 2,
                        dislikes: 0,
                        replies:[
                            {
                                id:4,
                                parentId:3,
                                name: 'prasanth',
                                created_at: '1 year ago',
                                content: 'you are welcome',
                                likes: 2,
                                dislikes: 0
                            },
                            {
                                id:9,
                                parentId:3,
                                name: 'chaithanya',
                                created_at: '1 year ago',
                                content: 'danyavadamulu',
                                likes: 2,
                                dislikes: 0
                            }
                        ]
                    }
                ]
            },
            {
                id:5,
                parentId:1,
                name: 'faheem',
                created_at: '1 year ago',
                content: 'no it is haram',
                likes: 1,
                dislikes: 0,
            },
            {
                id:6,
                parentId:1,
                name: 'lakshman',
                created_at: '1 year ago',
                content: 'what is haram ?',
                likes: 0,
                dislikes: 0,
            },
            {
                id:7,
                parentId:1,
                name: 'prasanth',
                created_at: '1 year ago',
                content: 'lite bro waste gadu',
                likes: 0,
                dislikes: 0,
            }
        ]
    },
    {
        id:8,
        name: 'sai kumar',
        created_at: '6 months ago',
        content: 'jai jagun',
        likes: 10,
        dislikes: 2,
    }
]

export type CommentActionType = {type:'add_comment' | 'delete_comment' | 'add_reply' | 'edit_comment', videoId:number, parentId:number, content:string|null};

function findNode(state:CommentType[], id:number):CommentType|null {
    let pointer:CommentType|null = null;
    function find(state:CommentType[]){
        if(!pointer)
        for (const comment of state) {
            if (comment.id === id) {
                pointer = comment;
                break;
            }
            else {
                if (comment.replies)
                    find(comment.replies)
            }
        }
    }
    find(state);
    return pointer;
}
function deleteNode(state:CommentType[], id:number):CommentType[]{
    let deleted = false;
    function deleteComment(state:CommentType[]):CommentType[]{
        return state.filter(comment => {
            if(deleted) return deleted;
            if(comment.id == id) {
                deleted = true;
                return false
            }
            if(comment.replies) comment.replies = deleteComment(comment.replies);
            return true;
        })
    }
    return deleteComment(state);
}
async function createComment(state:CommentType[], videoId:number, parentId:number, content:string){
    // api call...
    try{
        const apiResponse = await new Promise((res, rej)=>{
            setTimeout(res,2000)
        })
    }
    catch(e){
        alert('cant create your comment right now');
    }
}
function reducer(state:CommentType[], action:CommentActionType){
    const {type, videoId, parentId, content} = action
    switch(type){
        case 'add_reply' :
            // createComment(state, videoId, parentId, content).then(res => {
            if(!content) break;
            const commentNode = findNode(state, parentId)
            if(commentNode){
                if(!commentNode.replies)
                    commentNode.replies = [];
                commentNode.replies.push({id:Number(Date.now()), name:'lakshman', created_at:String(Date.now()), content, likes:0,dislikes:0})
                return [...state]
            }
            // });
            break;
        case 'delete_comment': return deleteNode(state, parentId);
        case 'edit_comment': {
            const commentNode = findNode(state, parentId);
            if( commentNode && content) 
                commentNode.content = content;
            return [...state];
        }
    }
    return state;
}
function NestedComments({lastId}:{lastId:number}) {
    const [commentData, dispatch] = useReducer(reducer, data);
    const lastID = useRef(lastId);
    const {videoId} = useParams();
    // const queryParams = useQueryParams();
    // console.log(videoId);
    if(videoId)
    return (
        <div>
            <h3>Comments</h3>
            {/* <button onClick={()=>dispatch({type:'delete_comment'})}>delete_comment</button>
            <button onClick={()=>dispatch({type:'add_reply'})}>add_reply</button> */}
            {commentData.map(item => <Comment key={item.id} {...item} dispatch={dispatch} videoId={Number(videoId)}/>)}
        </div>
    )
    else return (
        <div>No video</div>
    )
}

export default NestedComments
