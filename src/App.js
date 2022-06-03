import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav />
        <div className='app-wrapper-content'>
           <Route  component={Profile}/>
          {/*<Route component={Dialogs} path='/dialogs'/>
          <Route component={Music} path='/music'/>
          <Route component={News} path='/profile'/>
          <Route component={Settings} path='/settings'/> */}
        </div>
    </div>
  );
}

export default App;
