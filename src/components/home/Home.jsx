import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthProvider } from "../../../context/AuthContext";
import Navbar from "../../MainComps/Navbar";
import Footer from "../../MainComps/Footer";
import Banner from "./HomeComps/Banner";
import Categories from "./HomeComps/Categories";
import TrendingBooks from "./HomeComps/TrendingBooks";
import Extra from "./HomeComps/Extra";

const Home = () => {

    const { user, loading } = useContext(AuthProvider)
    console.log(user)

    return (
        <>
  
        <div className="bg-base-300 dark:bg-black min-h-screen">
            <Helmet>
                <title>First Page | Get Your Favorite Books</title>
            </Helmet>
            <div>
        <div className="lg:sticky top-0 z-50">
        <Navbar></Navbar>
        </div>
        { loading && <div className="text-center bg-base-300 text-sm lg:text-lg hidden lg:flex items-center justify-center gap-2">Loading...</div>}
        {!loading && user && <div className="text-center bg-base-300 text-sm lg:text-lg hidden lg:flex items-center justify-center gap-2">
                Hello, {user.displayName}
            </div>}
        <Banner></Banner>
        </div>
        <TrendingBooks></TrendingBooks>
        <Categories></Categories>
        <Extra></Extra>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Home;
