import Landing from "../pages/LandingPage/LandingPage";
import Bag from "../pages/BagPage/BagPage";
import Product from "../pages/ProductPage/ProductPage";

export const AllRoutes = [
    { path: "*", component: Landing},
    { path: "/bag", component: Bag},
    { path: "/product", component: Product }
]