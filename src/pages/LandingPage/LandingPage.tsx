import React from "react";
import cl from './Landing.module.css';
import Slide from "../../components/Slide";
import Header from "../../components/UI/Header/Header";
import Welcome from "../../components/UI/Welcome/Welcome";
import CatalogButton from "../../components/UI/CatalogButton/CatalogButton";
import ModalLogin from "../../components/UI/ModalLogin/ModalLogin";
import WhyUs from "../../components/UI/WhyUs/WhyUs";
import UpButton from "./UpButton/UpButton";
import MessageButton from "./MessageButton/MessageButton";
import BuyNow from "../../components/UI/BuyNow/BuyNow";

const Landing: React.FC = () => {
    return (
        <Slide heightValue='100vh'>
            <Header />
            <ModalLogin />
            <Welcome />
            <CatalogButton />
            <div className={cl.elipse}/>
            <WhyUs/>
            <UpButton/>
            <MessageButton/>
            <div className={cl.first_circle}/>
            <div className={cl.second_circle}/>
            <div className={cl.third_circle}/>
            <div className={cl.fourth_circle}/>
            <BuyNow/>
        </Slide>
    )
}

export default Landing