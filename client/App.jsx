import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

//pages
import Home from './pages/Home';
import AllHooks from './pages/AllHooksParent';
import State from './pages/State';
import InfiniteEffect from './pages/InfiniteEffect';
import ContextParent from './pages/ContextParent';
import Ref from './pages/Ref';

//layouts
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route
        path='/State'
        element={<State key='useState' />}
      />
      <Route
        path='/InfiniteEffect'
        element={<InfiniteEffect key='InfiniteEffect' />}
      />
      <Route
        path='/ContextParent'
        element={<ContextParent key='ContextParent' />}
      />
      <Route
        path='/Ref'
        element={<Ref key='Ref' />}
      />
      <Route
        path='/AllHooks'
        element={<AllHooks key='AllHooks' />}
      />
    </Route>
  )
)


const App = () => {
  return (
      <RouterProvider router={router}/>
  )
}

export default App;
