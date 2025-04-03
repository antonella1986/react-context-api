import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CountContext from './contexts/CountContext';
//layout
import DefaultLayout from './layout/DefaultLayout'
//pagine
import Home from './pages/Home'
import PostCard from './pages/PostCard'
import PostsList from './pages/PostsList'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
    <CountContext.Provider value={{ count: 1 }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/postslist" element={<PostsList />} />
            <Route path="/postslist/:id" element={<PostCard />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CountContext.Provider>
    </>
  )
}

export default App

