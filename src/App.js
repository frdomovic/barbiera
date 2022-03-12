import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/store'
//
import PrivateRoute from './Auth/PrivateRoute'
import PrivateRouteW from './Auth/PrivateRouteW'
//
import Footer from './Pages/Footer/Footer'
import Header from './Pages/Header/Header'
import StarterPage from './Pages/StarterPage/StarterPage'
import EndReservation from './Pages/EndReservation/EndReservation'
import Login from './Pages/Login/Login'
import DateReservation from './Pages/DateReservation/DateReservation'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
import WorkerDashboard from './Pages/WorkerDashboard/WorkerDashboard'
import PublicRoute from './Auth/PublicRoute'
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
              <Route element={<PublicRoute />}>
                <Route path='/login' element={<Login />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path='/admin-dashboard' element={<AdminDashboard />} />
              </Route>
              <Route element={<PrivateRouteW />}>
                <Route path='/worker-dashboard' element={<WorkerDashboard />} />
              </Route>
            </Routes>
          </Provider>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
