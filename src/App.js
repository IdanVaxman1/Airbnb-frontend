import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader';
import { Home } from './pages/Home';
import { HashRouter as Router, Routes } from 'react-router-dom'
// import './App.css';

function App() {
  return (
    <Router>
            <div className="app">
              <header className='app-header'>
                <h1>header</h1>
              </header>
                <main>
                  <AppHeader/>
                  
                    <Routes>
                        <Route path='/' element={<Home />} />
                        {/* <Route path='/time' element={<Time />} />
                        <Route path='/watch' element={<Watch />} /> */}
                    {/* <p>hello</p> */}
                    </Routes>
                </main>
                <footer className="app-footer">
                    <section className="container">
                        &copy; coffeerights 2022
                    </section>
                </footer>
            </div>
        </Router>
  );
}

export default App;
