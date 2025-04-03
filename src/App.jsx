import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CountProvider } from './contexts/CountContext';
//layout
import DefaultLayout from './layout/DefaultLayout'
//pagine
import Home from './pages/Home'
import PostCard from './pages/PostCard'
import PostsList from './pages/PostsList'

function App() {

  return (
    <>
    <CountProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/postslist" element={<PostsList />} />
            <Route path="/posts/:id" element={<PostCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CountProvider>
    </>
  )
}

export default App

