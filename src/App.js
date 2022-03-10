import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/store'
//
import PrivateRoute from './Auth/PublicRoute'
import PublicRoute from './Auth/PublicRoute'
import PrivateRouteAdmin from './Auth/PrivateRouteAdmin'
//
import Footer from './Pages/Footer/Footer'
import Header from './Pages/Header/Header'
import StarterPage from './Pages/StarterPage/StarterPage'
import EndReservation from './Pages/EndReservation/EndReservation'
import Login from './Pages/Login/Login'
import DateReservation from './Pages/DateReservation/DateReservation'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
import WorkerDashboard from './Pages/WorkerDashboard/WorkerDashboard'
function App () {
  return (
    <Router>
      <div className='w-full h-screen'>
        <div className='w-full h-screen flex flex-col justify-between bg-barber-img bg-no-repeat bg-cover '>
          <Header />
          <Provider store={store}>
            <Routes>
              <Route path='/' element={<StarterPage />} />
              <Route path='/date-reservation' element={<DateReservation />} />
              <Route
                path='/date-reservation/endreservation'
                element={<EndReservation />}
              />

              <Route path='/login' element={<Login />} />
              <Route path='/admin-dashboard' element={<AdminDashboard />} />

              <Route path='/worker-dashboard' element={<WorkerDashboard />} />
            </Routes>
          </Provider>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
