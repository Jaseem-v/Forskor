import './sass/style.scss'

import {
  BrowserRouter, Navigate, Route, Routes, useParams
} from "react-router-dom"
import Home from './pages/Home'
import Menu from './pages/Menu'
import { useEffect, useState } from 'react'
import TrackOrder from './pages/TrackOrder'
import Navbar from './components/Navbar/Navbar'
import BottomFooterNavigation from './components/bottomNavigation/BottomFootarNavigation'
import BottomDetailsTab from './components/BottomDetails/BottomDetailsTab'
import { useSelector } from 'react-redux'
import AlrtContainer from './components/alrtmsg/AlrtContainer'
import Cart from './pages/Cart'
import { useLocation } from 'react-router-dom';
import Splash from './pages/Splash'



function App() {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 500px)").matches
  )
  useEffect(() => {
    window
      .matchMedia("(max-width: 500px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const bottomPanel = useSelector((state) => state.productReducer)

  let location = useLocation();

  console.log("id", location);

  return (

    <main>

      {["/splash/login", "/splash/signup", "/splash", "/splash/otp"].includes(location.pathname) ?
        null :
        < Navbar />
      }

      <AlrtContainer />

      <div className="App">

        {matches ?

          <div>
            <Routes>
              <Route path="/" element={
                <Home />
              } />

              <Route path="/menu" element={
                <Menu />
              } />
              <Route path="/splash/*" element={
                <Splash />
              } />
              <Route path="/trackOrder" element={
                <TrackOrder />
              } />
              <Route path="/cart" element={
                <Cart />
              } />

              {/* <Route
                path="*"
                element={<Navigate to="/" replace />}
              /> */}

            </Routes>

            {
              ["/splash/login", "/splash/signup", "/splash", "/splash/otp"].includes(location.pathname) ?
                null :
                <div className="bottom-footer-navigation">
                  <BottomFooterNavigation />
                </div>
            }



            {bottomPanel &&
              <BottomDetailsTab />
            }
          </div> :
          <h1>
            site works only in mobile devices

          </h1>
        }


      </div >


    </main>

  )
}

export default App
