import React from "react";
import { Route, Routes} from "react-router-dom";

import Home from "../Pages/Home";
import Sobre from "../Pages/Sobre";
import Usuario from "../Pages/Usuario";


const Rotas = () => {
    return (
        <Routes>
            <Route component={Home} path="/" exact />
            <Route component={Sobre} path="/sobre" />
            <Route component={Usuario} path="/usuario" />
            </Routes>
    )
}

export default Rotas;