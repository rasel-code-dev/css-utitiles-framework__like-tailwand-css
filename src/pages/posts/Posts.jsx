import {connect, useDispatch} from "react-redux";
import {useEffect} from "preact/compat";
import api from "../../apis";
import fullLink from "../../utils/fullLink";


const Posts = (props) => {
  const { postState } = props
  
  const dispatch = useDispatch()

  
  useEffect(async ()=>{
    let data = await api.get("/api/posts")
    // console.log(data)
    let posts = data.data.posts
    // let LikesData = await api.get("/api/likes")
    // let likes = LikesData.data.likes
    
    // api.get("/api/likes").then(response=>{
    //   console.log(response)
    //   // dispatch({
    //   //   type: "FETCH_LIKES",
    //   //   payload: response.data.likes
    //   // })
    // })
  
    dispatch({
      type: "FETCH_POSTS",
      payload: posts
    })
    
  }, [])
  
  function postReaction(post){
    return (
      <div>
        <ul className="flex">
          <li className="w-30 mx-1 flex align-center">
            <i className="far fa-heart hover:text-primary" />
            <span className="font-400 ml-1">{post.total_likes}</span>
          </li>
          <li className="ml-5 flex align-center">
            <i className="far fa-comment-alt-dots" />
            <span className="font-400 ml-1" >{10}</span>
          </li>
        </ul>
      </div>
    )
  }
  
  function renderPosts(){
    return postState.posts.map(post=>(
      <div className="post p-4 bg-white mb-4 rounded-8">
        <div className="post_meta flex">
          <div className="flex flex-1">
            <div className="mr-1 w-10">
              <img style={{width: '100%'}} className="rounded-full" src={fullLink(post.author.avatar)} alt=""/>
            </div>
            <div className="w-full">
              <div className="flex flex-1 w-full justify-between align-center">
                <div className="flex flex-1">
                  <h4 className="text-primary font-400 mr-1">{post.author.username}</h4>
                  <h4 className="mr-4 font-400">Timeline</h4>
                </div>
                <i className="far fa-ellipsis-h cursor-pointer" />
              </div>
              <div className="flex align-center text-gray-light-6">
                 <i className="text-xs fa fa-globe-americas mr-1" />
                <div className="text-xs font-400 ">Published:  Created on {new Date(post.created_at).toDateString()}</div>
              </div>
            </div>
          </div>
        </div>
        
        <h4 className="font-400 mt-2">{post.title}</h4>
        <p className="mt-1 text-sm">{post.description}</p>
        <div className="border-b-1 hover:border-pink-400 border-gray-light-3 border-opacity-75 mb-3" />
        
        {postReaction(post)}
      </div>
    ))
  }
  
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-2">
        <div className="max-w-xl mx-auto">
          {renderPosts()}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state){
  return {
    postState: state.postState
  }
}

export default connect(mapStateToProps, {})(Posts);