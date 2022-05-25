import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import {AppFooter} from './cmps/AppFooter'
import {Home} from './pages/home.jsx'
import {Explore} from './pages/explore'
import { Login } from './pages/login'


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
