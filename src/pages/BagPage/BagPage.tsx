import React from "react";
import Slide from "../../components/Slide";
import Header from "../../components/UI/Header/Header";
import ShoppingBag from "../../components/UI/ShoppingBag/ShoppingBag";
import Recommendation from "../../components/UI/Recommendation/Recommendation";
import Footer from "../../components/UI/Footer/Footer";

const Bag: React.FC = () => {
    const products = [
        {1: 1},
        {2: 2}
    ];

    return (
        <Slide heightValue='100vh'>
            <Header/>
            <ShoppingBag/> 
            <Recommendation/>
            <Footer/>
        </Slide>
    );
}

export default Bag;
