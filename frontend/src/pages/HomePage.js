import HomePageComponent from "./components/HomePageComponent";
import { useSelector } from "react-redux";
import axios from "axios";
import GoogleMaps from "../utils/GoogleMaps";

const getBestsellers = async () => {
    const { data } = await axios.get("/api/products/bestsellers");
    return data;
}

const HomePage = () => {

    const { categories } = useSelector((state) => state.getCategories);

  return (
  <div>
    <HomePageComponent categories={categories} getBestsellers={getBestsellers} />
  </div>
  );
};

export default HomePage;
