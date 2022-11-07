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
    <GoogleMaps address={"15 Roehampton Ave, Toronto, ON M4P 0C2"}/>
    <HomePageComponent categories={categories} getBestsellers={getBestsellers} />
  </div>
  );
};

export default HomePage;
