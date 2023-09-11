import React from 'react';

import NavBar from '../components/Home/NavBar';
import Header from '../components/Home/Header';
import Advantages from '../components/Home/Advantages';
import Hotoffers from '../components/Home/Hotoffers';
import About from '../components/Home/About';
import Map from '../components/Home/Map';
import Footer from '../components/Home/Footer';

export default function Home() {
  return (
    <>
    <NavBar/>
    <Header/>
    <Advantages/>
    <Hotoffers/>
    <About/>
    <Map/>
    <Footer/>

    </>
  )
}
