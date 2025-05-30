import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {

  return (
    <>
<Navbar/>

 <div className='cards'>
    <Card title="card1" description="card 1 is the first card in among all"/>
      <Card title="card2" description="card 2 is the second card in among all"/>
        <Card title="card3" description="card 3 is the third card in among all"/>
      
    
   
</div>
<Footer/>
    </>
  )
}

export default App
