// import { useState, useEffect } from 'react';
import Comment from './Comment';

export type CommentType = { id:number, name: string, tag?:string,  created_at:string, content: string, likes: number, dislikes: number, replies?: CommentType[] }
function NestedComments() {
    const data = [
        {
            id: 1,
            userId: 1,
            videoId: 1,
            name: 'lakshman',
            created_at: ' 1 year ago',
            content: 'you are the best sir',
            likes: 10,
            dislikes: 2,
            replies: [
                {
                    userId:2,
                    id:2,
                    created_at: '1 year ago',
                    name: 'prasanth',
                    timeline: ' 1 year ago',
                    content: 'you said the words in my heart',
                    tag: "lakshman",
                    likes: 2,
                    dislikes: 0,
                },
                {
                    userId:3,
                    id:3,
                    created_at: '1 year ago',
                    name: 'faheem',
                    timeline: ' 1 year ago',
                    content: 'no it is haram',
                    tag: "prasanth",
                    likes: 1,
                    dislikes: 0,
                },
                {
                    userId:1,
                    id:4,
                    created_at: '1 year ago',
                    name: 'lakshman',
                    timeline: ' 1 year ago',
                    content: 'what is haram',
                    tag: "faheem",
                    likes: 0,
                    dislikes: 0,
                },
                {
                    userId:2,
                    id:5,
                    created_at: '1 year ago',
                    name: 'prasanth',
                    timeline: ' 1 year ago',
                    content: 'lite bro waste gadu',
                    tag: "lakshman",
                    likes: 0,
                    dislikes: 0,
                }
            ]
        },
        {
            userId:4,
            id:6,
            name: 'sai kumar',
            created_at: '6 months ago',
            content: 'jai jagun',
            likes: 10,
            dislikes: 2,
            replies: []
        }
    ]
    return (
        <div>
            <h3>Comments</h3>
            {data.map(item => <Comment key={item.id} {...item}/>)}
        </div>
    )
}

export default NestedComments
