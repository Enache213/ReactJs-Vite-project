import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import LeftSide from './pages/StartingPage/LeftSide';
import RightSide from './pages/StartingPage/RightSide';
import NewsFeed from './pages/StartingPage/NewsFeed';
// import { BrowserRouter as Routes, Route } from 'react-router-dom';
// import ProfilePage from './components/ProfilePage';

function App() {

  return (
   
   <>
<NavBar></NavBar>
<LeftSide></LeftSide>
<NewsFeed></NewsFeed>
<RightSide></RightSide>
<Footer></Footer>
   </>

   
  )
}

export default App
