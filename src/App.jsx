import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import NewPost from './pages/NewPost/NewPost'
import Post from './pages/Post/Post';
import EditPost from './pages/EditPost/EditPost';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
      </Routes>
    </Router>
  )
}

export default App