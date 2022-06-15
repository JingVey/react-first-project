import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

  let postsElements = props.state.posts.map(p => <Post message={p.message} likes={p.likes} id={p.id}/>);

  let newPostEl = React.createRef();

  let addPost = () => { 
    let text = newPostEl.current.value;
    props.addPost(text); 
    newPostEl.current.value = '';
  };

  let addPostText = () => {
    let text = newPostEl.current.value;
    props.addPostText(text);
  };

  return (
    <div className={s.posts}>
      <div className={s.item}>My posts</div>
      <div>
        <textarea ref={newPostEl} onChange={addPostText} value={props.state.newPostText}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
      
    </div>
  );
}

export default MyPosts;
