import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout/ Layout';
import { Homepage, ArchivePage, EditPage } from './pages';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='notes' element={<Homepage />} />
          <Route path=':id' element={<EditPage />} />
          <Route path='notes/:id' element={<EditPage />} />
          <Route path='notes-archive' element={<ArchivePage />} />
          <Route path='*' element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
