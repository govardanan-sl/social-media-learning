import {useState,useEffect} from 'react';
import PostList from './PostList';
const Home = () =>{
    const handleDelete = (id) => {
        const newPosts = posts.filter(post => post.id!==id)
        setPosts(newPosts);
    }
    const [posts,setPosts] = useState([ 
        {title : 'Post 1', body : 'Hello World', author : 'bruce', id : 0},
        {title : 'Post 2', body : 'This is just a post', author : 'bruce', id : 1},
        {title : 'Post 2', body : 'Just an another Post', author : 'bruce', id : 2},
        {title : 'Another User', body : 'Just an another Post', author : 'Govardanan', id : 3}
    ]);

    useEffect(() => {
        
    });
    return(
        <div className="Home">
        <PostList posts={posts} title="All Posts" handleDelete={handleDelete}></PostList>
        <PostList posts={posts.filter((post)=>post.author ==='bruce')} title="My Posts" handleDelete={handleDelete} />
        </div>
    )
}
export default Home;