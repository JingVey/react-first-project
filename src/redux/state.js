import { rerenderEntireTree } from "../render";

let state = {
    profilePage:{ 
        posts: [
          {id: 1, message: 'hello everybody', likes: 5},
          {id: 2, message: 'this is react magic', likes: 23} ],
        newPostText: 'hello'
    },
    
    dialogsPage: {
        dialogs: [
            { id: 1, name: "One" },
            { id: 2, name: "Two" },
            { id: 3, name: "Threeeeee" }
          ],
        messages: [
            {id: 1, message: "Hey you"},
            {id: 2, message: "out there in the cold"},
            {id: 3, message: "getting lonely getting old"},
            {id: 4, message: "can you help me?"}
          ]
    }
};

export let addPost = (text) => {
  let newPost = {
    id: 3,
    message: text,
    likes: 0
  }
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export let  addPostText = (text) => {
  state.profilePage.newPostText = text;
  rerenderEntireTree(state);
}


  export default state;