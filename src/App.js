import './App.css';
import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import All from './Components/All'
import Search from './Components/Search';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Search />
        <Routes>
          <Route exact path='/all' element={<All />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

{/* <div className={`${styles.buttons} d-flex gap-2`}>
                            <button onClick={() => navigate('/interaction')} className={`${styles.search}`}>
                                <FaSearch className='fs-4' />
                            </button>
                            <Link onClick={handleClick} className="mt-1" to="/profile">
                                <img
                                    src="https://gravatar.com/avatar/21396bf8a2c260311eaca86416ef5db7?s=400&d=mp&r=x"
                                    alt="avatar"
                                    className={styles.avatar}
                                />
                            </Link>
                        </div> */}