import React from "react";
import cl from './Landing.module.css';
import Slide from "../../components/Slide";
import Header from "../../components/UI/Header/Header";
import Welcome from "../../components/UI/Welcome/Welcome";
import CatalogButton from "../../components/UI/CatalogButton/CatalogButton";
import ModalLogin from "../../components/UI/ModalLogin/ModalLogin";

const Landing: React.FC = () => {
    return (
        <Slide heightValue='100vh'>
            <Header />
            <ModalLogin />
            <Welcome />
            <CatalogButton />
            <div className={cl.elipse}></div>
        </Slide>
    )
}

export default Landing