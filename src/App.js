import './App.css';
import CustomerStories from './component/coverPageComponent/Customerstory';
import Features from './component/coverPageComponent/Features';
import Navbar from './component/coverPageComponent/Navbar';
import TitleHeader from './component/coverPageComponent/Titleheader';
import Styles from "./component/Styles/index.module.scss";



function App() { 
  return(
    <div className={Styles.body}>
    <div>
      <Navbar/>
    </div>
    <div className='App'>
      <TitleHeader/>
    </div>
    <div>
    <Features/>
    </div>
    <div>
      <CustomerStories/>
    </div>
    </div>
  )
}

export default App;
