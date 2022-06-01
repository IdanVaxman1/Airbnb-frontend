import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import {AppFooter} from './cmps/app-footer'
import {Home} from './pages/home.jsx'
import {Explore} from './pages/explore'
import {StayDetails} from './pages/stay-details'
import {Helmet} from "react-helmet"
import {LoginSignup} from './cmps/login-signup'



function App() {
  return (
    <Router>
            <div className="app">

            <Helmet>
                <meta charSet="utf-8" />
                <title>StayBnb</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Vacation apartments rental" />

            </Helmet>

              <AppHeader/>
                <main>
                    <Routes>
                        <Route path='/stay/:stayId' element={<StayDetails />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/explore' element={<Explore />} />
                        <Route path='/' element={<Home />} />
                    </Routes>
                    <LoginSignup/>
                </main>
              <AppFooter />
            </div>
        </Router>
  );
}

export default App;
