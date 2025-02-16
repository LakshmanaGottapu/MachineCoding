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
function deleteNode(state, id){
    // let deleteFlag = false;
    function deleteComment(state){
        return state.filter(comment => {
            if(comment.id == id) 
                return false;
            if(comment.replies) 
                comment.replies = deleteComment(comment.replies)
            return true;
        })
    }
    return deleteComment(state);
}
// console.log(findNode(deleteNode(data, 2), 2))

let a = {
    name: 'lakshman',
    age: 28,
    hobbies: ['tennis', 'chess']
}
let b = {
    name: 'lakshman',
    age: 28,
    hobbies: ['chess', 'tennis']
}

function compare(obj1, obj2){
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if(keys1.length !==keys2.length) return false;
    keys1.filter(key1 => keys2.filter(key2 => key1 == key2))
}