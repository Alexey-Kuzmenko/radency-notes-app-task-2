import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout/ Layout';
import { Homepage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='notes' element={<Homepage />} />
          <Route path='notes-archive' element={<h1>Archive</h1>} />
          <Route path='*' element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
