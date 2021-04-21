const PostList = ({posts,title,handleDelete}) =>{
   // const posts=props.posts;
    return (  
        <div className= "post-list"> 
            <h2>{title}</h2>
            {posts.map((post)=>(
            <div className = "post-preview" key={post.id}> 
               <h2>{post.title}</h2>
               <p>{post.body}</p>
               <p>by {post.author}</p>
               <button onClick={() => handleDelete(post.id)}>Delete Post</button> 
            </div>
            ))}
        </div>
    );
}

export default PostList;