import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import {AppFooter} from './cmps/app-footer'
import {Home} from './pages/Home.jsx'
import {Explore} from './pages/Explore'
import { Login } from './pages/login'
import {StayDetails} from './pages/stay-details'


function App() {
  return (
    <Router>
            <div className="app">
              <AppHeader/>
                <main>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/stay/:stayId' element={<StayDetails />} />
                        <Route path='/explore' element={<Explore />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </main>
              <AppFooter/>
            </div>
        </Router>
  );
}

export default App;
