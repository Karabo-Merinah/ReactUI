import './App.css'
import {Navbar} from './assets/Components/Navbar/Navbar'
import {Footer} from '../src/assets/Components/Footer/Footer'
import {Home} from '../src/assets/Components/Home/Home'
import {Collection} from '../src/assets/Components/Collection/Collection'
import cupcakes from '../src/assets/pictures/cupcakes.jpg'
import CustomCakes from '../src/assets/pictures/CustomCakes.jpg'
import cakes from '../src/assets/pictures/cakes.jpg'
import { useState } from 'react'
import {Menu} from '../src/assets/Menu/Menu'
function App() {
 const [pictures]=useState([{id:1,imgLink:CustomCakes},{id:2,imgLink:cakes},{id:3,imgLink:cupcakes}])
 const [desc]=useState([{id:1,name:'Custom Cakes',description:"Handcrafted cakes made to order for your special celebration."},{id:2,name:'Macaroins',description:"Delicate, colorful macarons baked fresh daily."},{id:3,name:'Cupcakes',description:"A sweet variety of cupcakes for every occasion"}])
  return (
    <>
    <div id="app-container">
      <div id="scrollable">
      <Navbar/>
    </div>
      <section id="HOME"><Home/></section>
      <section id="MENU"><Menu pictures={pictures} desc={desc}/></section>
      <section id="PASTRIES"><Collection/></section>
      <section id="CONTACT"><Footer/></section>
      </div>
    </>
  )
}

export default App
