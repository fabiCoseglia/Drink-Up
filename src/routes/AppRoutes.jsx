import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound  } from "../pages/NotFound";

import React from 'react'
import { Layout } from "../Layout";

export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="*" element={<NotFound/>} />
            </Route>
          </Routes>
    </Router>
  )
}
