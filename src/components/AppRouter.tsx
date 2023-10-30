import React from "react";
import { AllRoutes } from '../router';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
            {
                AllRoutes.map((route, index) => (
                    <Route key = {index} path={route.path} Component={route.component}/>
                ))
            }
            </Routes>
        </BrowserRouter>
    )

}

export default AppRouter