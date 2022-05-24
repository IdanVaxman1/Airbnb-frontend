import { HashRouter as Router, Route, Routes } from 'react-router-dom'
// import './App.css';

function App() {
  return (
    <Router>
            <div className="app">
              <header className='app-header'>
                <h1>header</h1>
              </header>
                <main>
                    <Routes>
                        {/* <Route path='/form' element={<Form />} />
                        <Route path='/time' element={<Time />} />
                        <Route path='/watch' element={<Watch />} /> */}
                    </Routes>
                    <p>hello</p>
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
