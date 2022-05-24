import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import {AppFooter} from './cmps/app-footer'
import {Home} from './pages/stay-home'
import {Explore} from './pages/stay-explore'


function App() {
  return (
    <Router>
            <div className="app">
              <AppHeader/>
                <main>
                  <AppHeader/>
                  
                    <Routes>
                        <Route path='/explore' element={<Home />} />
                        <Route path='/home' element={<Explore />} />
                    </Routes>
                </main>
              <AppFooter/>
            </div>
        </Router>
  );
}

export default App;
