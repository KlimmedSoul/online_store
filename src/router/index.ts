import Landing from "../pages/LandingPage/LandingPage";
import Bag from "../pages/BagPage/BagPage";
import Product from "../pages/ProductPage/ProductPage";
import Catalog from "../pages/CatalogPage/CatalogPage";
import Favorite from "../pages/FavoritePage/FavoritePage";
import Viewed from "../pages/ViewedPage/ViewedPage";

export const AllRoutes = [
    { path: "*", component: Landing },
    { path: "/bag", component: Bag },
    { path: "/product", component: Product },
    { path: "/catalog", component: Catalog },
    { path: "/favorite", component: Favorite }, 
    { path: "/viewed", component: Viewed}
]