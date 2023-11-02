import React from "react";
import cl from './Landing.module.css';
import Slide from "../../components/Slide";
import Header from "../../components/UI/Header/Header";
import Welcome from "../../components/UI/Welcome/Welcome";
import CatalogButton from "../../components/UI/CatalogButton/CatalogButton";
import WhyUs from "../../components/UI/WhyUs/WhyUs";
import UpButton from "./UpButton/UpButton";
import MessageButton from "./MessageButton/MessageButton";
import BuyNow from "../../components/UI/BuyNow/BuyNow";
import FeedBack from "../../components/UI/FeedBack/FeedBack";
import FAQ from "../../components/UI/FAQ/FAQ";
import Cooperation from "../../components/UI/Сooperation/Сooperation";
import Invite from "../../components/UI/Invite/Invite";
import BigElipse from "../../components/UI/BigElipse/BigElipse";
import SmallElipse from "../../components/UI/SmallElipse/SmallElipse";
import Footer from "../../components/UI/Footer/Footer";
import FilterModal from "../../components/UI/FilterModal/FilterModal";

const Landing: React.FC = () => {

    return (
        <Slide heightValue='100vh'>
            <Header />
            <Welcome />
            <CatalogButton />
            <BigElipse/>
            <WhyUs/>
            <UpButton/>
            <MessageButton/>
            <div className={cl.first_circle}/>
            <div className={cl.second_circle}/>
            <div className={cl.third_circle}/>
            <div className={cl.fourth_circle}/>
            <BuyNow/>
            <FeedBack/>
            <BigElipse/>
            <FAQ/>
            <Cooperation/>
            <SmallElipse/>
            <Invite/>
            <BigElipse/>
            <Footer/>
        </Slide>
    )
}

export default Landing