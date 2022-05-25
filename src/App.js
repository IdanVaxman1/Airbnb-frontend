import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import {AppFooter} from './cmps/AppFooter'
import {Home} from './pages/Home'
import {Explore} from './pages/Explore'

import { Login } from './pages/Login'


function App() {
  return (
    <Router>
            <div className="app">
              <AppHeader/>
                <main>
                 
                  
                    <Routes>
                        <Route path='/home' element={<Home />} />
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
