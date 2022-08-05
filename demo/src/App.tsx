import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import routers from './router/RouterViews';
function App() {
  const route = (arr: any) => {
    return arr.map((item: any, index: number) => {
      return item.path ? <Route key={index} path={item.path} element={<item.element />}>
        {
          item.children && route(item.children)
        }
      </Route> : <Route key={index} path={item.from} element={<Navigate to={item.to}></Navigate>}></Route>
    })
  }
  return (
    <Suspense fallback={<>加载中....</>}>
      <BrowserRouter>
        <Routes>
          {
            route(routers)
          }
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
