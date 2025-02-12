const data = [
    {
        id: 1,
        name: 'lakshman',
        created_at: ' 1 year ago',
        content: 'you are the best sir',
        likes: 10,
        dislikes: 2,
        replies: [
            {
                id: 2,
                parentId: 1,
                name: 'prasanth',
                created_at: '1 year ago',
                content: 'you said the words in my heart',
                likes: 2,
                dislikes: 0,
                replies: [
                    {
                        id: 3,
                        parentId: 2,
                        name: 'lakshman',
                        created_at: '1 year ago',
                        content: 'thank you',
                        likes: 2,
                        dislikes: 0,
                        replies: [
                            {
                                id: 4,
                                parentId: 3,
                                name: 'prasanth',
                                created_at: '1 year ago',
                                content: 'you are welcome',
                                likes: 2,
                                dislikes: 0
                            },
                            {
                                id: 9,
                                parentId: 3,
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
                id: 5,
                parentId: 1,
                name: 'faheem',
                created_at: '1 year ago',
                content: 'no it is haram',
                likes: 1,
                dislikes: 0,
            },
            {
                id: 6,
                parentId: 1,
                name: 'lakshman',
                created_at: '1 year ago',
                content: 'what is haram ?',
                likes: 0,
                dislikes: 0,
            },
            {
                id: 7,
                parentId: 1,
                name: 'prasanth',
                created_at: '1 year ago',
                content: 'lite bro waste gadu',
                likes: 0,
                dislikes: 0,
            }
        ]
    },
    {
        id: 8,
        name: 'sai kumar',
        created_at: '6 months ago',
        content: 'jai jagun',
        likes: 10,
        dislikes: 2,
    }
]
function findNode(state, id) {
    let pointer;
    function find(state){
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

console.log(findNode(data, 2))