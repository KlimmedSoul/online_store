import React from "react";
import cl from './ProductPage.module.css';
import Slide from "../../components/Slide";
import Header from "../../components/UI/Header/Header";
import BackButton from "../../components/UI/BackButton/BackButton";
import Link from "./Link/Link";
import ProductItem from "../../components/UI/ProductItem/ProductItem";
import Footer from "../../components/UI/Footer/Footer";
import FeedBack from "../../components/UI/FeedBack/FeedBack";

const Product: React.FC = () => {

    return (
        <Slide heightValue='100vh'>
            <Header/>
            <section style={{display: 'flex', marginLeft: "7%", marginTop: "2%"}}>
                <BackButton link="http://localhost:3000/catalog"/>
                <Link/>
            </section>
            <ProductItem/>
            <FeedBack title="Отзывы о товаре"/>
            <Footer/>
        </Slide>
    )
}

export default Product