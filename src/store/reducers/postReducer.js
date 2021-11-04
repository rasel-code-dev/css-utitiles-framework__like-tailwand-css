


const initialState = {
  posts: [],
  likes: []
}



export default function (state=initialState, action){
  let updatedState = {...state}
  switch (action.type){
    case "FETCH_POSTS":
      updatedState.posts = action.payload
      return updatedState
    
    case "FETCH_LIKES":
      updatedState.likes = action.payload
      return updatedState
    
    default:
      return state
  }
}

