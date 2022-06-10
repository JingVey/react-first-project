import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes} id={p.id}/>);

  return (
    <div className={s.posts}>
      <div className={s.item}>My posts</div>
      <div>
        <textarea>New post</textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
      
    </div>
  );
}

export default MyPosts;
