
import React from "react";
import cl from './CatalogPage.module.css'
import Header from "../../components/UI/Header/Header";
import Footer from "../../components/UI/Footer/Footer";
import CatalogTitle from "../../components/UI/CatalogTitle/CatalogTitle";
import FiltersCatalog from "../../components/UI/FiltersCatalog/FiltersCatalog";
import SubFiltersCatalog from "../../components/UI/SubFiltersCatalog/SubFiltersCatalog";
import CardsCatalog from "./CardsCatalog/CardsCatalog";

const CatalogPage: React.FC = () => {
    return (
        <div className={cl.root}>
            <Header/>
            <CatalogTitle/>
            <FiltersCatalog/>
            <section className={cl.main_section}>
                <SubFiltersCatalog/>
                <CardsCatalog/>
            </section>
            <Footer/>
        </div>
    );
}

export default CatalogPage