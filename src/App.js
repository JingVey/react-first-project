import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav />
        <div className='app-wrapper-content'>
          
              <Route exact path='/profile' render={ () => <Profile 
                                                            state={props.state.profilePage} 
                                                            addPost={props.addPost}
                                                            addPostText={props.addPostText}/> }/> 
              <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} /> } />
              <Route path='/music' render={ () => <Music/> }/>
              <Route path='/news' render={ () => <News/> }/>
              <Route path='/settings' render={ () => <Settings/> }/>

        </div>
    </div>
  );
}

export default App;
