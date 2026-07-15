import './App.css'
import {Navbar} from './assets/Components/Navbar/Navbar'
import {Footer} from '../src/assets/Components/Footer/Footer'
import {Home} from '../src/assets/Components/Home/Home'
import {Collection} from '../src/assets/Components/Collection/Collection'
import secondPic from '../src/assets/pictures/second-pic.jpg'
import thirdPic from '../src/assets/pictures/third-picture.jpg'
import firstPic from '../src/assets/pictures/first-pic.jpg'
import { useState } from 'react'
import {Menu} from '../src/assets/Menu/Menu'
function App() {
 const [pictures]=useState([{id:1,imgLink:firstPic},{id:2,imgLink:secondPic},{id:3,imgLink:thirdPic}])
 const [desc]=useState([{id:1,name:'Custom Cakes',description:"Our custom cakes are crafted with the finest ingredients and arecision to match your vision.Whether it's a birthday, wedding, or any special moment into unforgettable memories"},{id:2,name:'Macaroins',description:"These delicate French macarons come in a rainbow of colors and flavors, with a crisp shell and a soft, chewy center.They are the ideal treat for gifting, parties, or simply indulging yourself with a little elegance"},{id:3,name:'Cupcakes',description:"Our cupcake collections are a feast for the eyes and the taste buds, topped with luscious frostings and playful decorations.Perfect for weddings, baby showers, or everyday cravings"}])
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
