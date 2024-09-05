import React, {useState} from 'react';
import './App.css';
import Tabs from './Components/Tabs';
import Content from './Components/Content';
import Gallery from './Components/Gallery';
import Dashboard from './Components/Dashboard';

function App() {
  const [activeTab, setActiveTab] = useState('About Me');
  return (
    <div className="App">
      {/* <div className='card'>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Content activeTab={activeTab}/>
      </div>
      <div className='card'>
      <Gallery/>
      </div> */}

      <Dashboard/>
    </div>
  );
}

export default App;
