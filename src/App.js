// import logo from './logo.svg';
import './App.css';
import NavBar from './components/Home/NavBar';
import Header from './components/Home/Header';
import Advantages from './components/Home/Advantages';
import Hotoffers from './components/Home/Hotoffers';
import About from './components/Home/About';
import Map from './components/Home/Map';
import Footer from './components/Home/Footer';
import Thanks from './components/Home/Thanks';
import Payment from './components/Home/Payment';

import Logoslider from './components/Home/Logoslider';

import Test from './components/Home/Test';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const testdata = [


  {id:1, name: 'Harry', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', description:'this is the description' },
  {id:2, name: 'peter', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', description:'this is the description' },
  {id:3, name: 'laddo', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', description:'this is the description' },
  {id:4, name:'kachori',img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', description:'this is the description' },

]

function App() {

  return (
    <>
{/* <Test testdata = {testdata} /> */}

   <NavBar/>
   <Header/>
   <Advantages/>
  <Hotoffers/>
  <About testdata = {testdata} />
 <Payment/>
  <Logoslider/>
  <Map/>
  <Footer/>
   </>
  );
}

export default App;
