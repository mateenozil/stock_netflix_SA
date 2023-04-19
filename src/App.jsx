import { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { RiNetflixFill } from "react-icons/ri";
import {
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-200">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="/news" element={<News/>}/>
        </Routes>  
    </div>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (e) => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="bg-gray-100 w-full py-2 border-b-2 shadow-gray-500">
      <div className='px-4 flex justify-between items-center max-w-screen-lg mx-auto'>
        <RiNetflixFill className='text-3xl'/>
        <AiOutlineMenu className='text-3xl sm:hidden' onClick={toggleMenu}/>
        <div className='<sm:hidden space-x-8'>
          <Link to='home'>Home</Link>
          <Link to='news'>News Analytics</Link>
        </div>
      </div>
      {isOpen? (
        <div className='pt-2 text-center md:hidden block'>
          <p><Link to='home'>Home</Link></p>
          <p><Link to='news'>News Analytics</Link></p>
        </div>
      ):(
        <div></div>
      )}
    </nav>
  );
}

function Card(props){
  return(
    <div>

    </div>
  )
}

function Home(){
  return(
    <div>
      Home
    </div>
  )
}

function News(){
  return(
    <div>
      News
      {/*dropdown news list*/}
      {/*
        title
        generate graph
      */}
      {/*polarity*/}
      {/*price differences*/}
      {/*correlation*/}
    </div>
  )
}
export default App
