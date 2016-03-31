export function reducer(state = false, action) {
    switch(action.type) {
        case 'CHANGE' : return !state
        default : return state
    }
}
//reducer有两个参数，第一是store里面的state，第二是我们创建的action
//调用dispatch之后会很据action的type调用相应的reducer
//reducer返回一个新的state到store中