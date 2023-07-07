import React from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "../../utils/routes";

import Home from "../Home/Home";
import SingleProduct from "../Products/SingleProduct";
import Profile from "../Profile/Profile";
import SingleCategory from "../Categories/SingleCategory";
import Cart from "../Cart/Cart";

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={routes.PRODUCT} element={<SingleProduct />} />
    <Route path={routes.PROFILE} element={<Profile />} />
    <Route path={routes.Category} element={<SingleCategory />} />
    <Route path={routes.Cart} element={<Cart />} />
  </Routes>
);

export default AppRoutes;
