import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import {AppFooter} from './cmps/AppFooter'
import {Home} from './pages/Home'
import {Explore} from './pages/Explore'
<<<<<<< HEAD
import {StayDetails} from './pages/stay-details'

import { Login } from './pages/login'
=======
import { Login } from './pages/Login'
>>>>>>> cbab895432a493553db62f380a444ce16f01b0e7


function App() {
  return (
    <Router>
            <div className="app">
              <AppHeader/>
                <main>
<<<<<<< HEAD
                
=======
                 
>>>>>>> cbab895432a493553db62f380a444ce16f01b0e7
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/details' element={<StayDetails />} />
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
