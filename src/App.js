import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Footer from './Pages/Footer/Footer'
import Header from './Pages/Header/Header'
import StarterPage from './Pages/StarterPage/StarterPage'
import EndReservation from './Pages/EndReservation/EndReservation'
import Login from './Pages/Login/Login'

function App () {
  return (
    <Router>
      <div className='w-full h-screen'>
        <div className='w-full h-screen flex flex-col justify-between bg-barber-img bg-no-repeat bg-cover '>
          <Header />
          <Routes>
            <Route path='/' exact element={<StarterPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App

/**
 * 
            <Route path='/login' element={<Login />} />
            <Route path='/endreservation' element={<EndReservation />} />
 */
