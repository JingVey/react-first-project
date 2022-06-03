import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div className={s.item}>My posts</div>
      <textarea>New post</textarea>
      <div className={s.posts}>
      <Post message='msg1' likes='5'/>
      <Post message='msg2'likes='23'/>
      </div>
      
    </div>
  );
}

export default MyPosts;
