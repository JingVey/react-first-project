import s from './Post.module.css';

const Post = (props) => {
  return (

      <div className={s.item}>
        <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'/>
        {props.message}
        <div>
          <button>Like</button>{props.likes}
        </div>
      </div>
 
  );
}

export default Post;
