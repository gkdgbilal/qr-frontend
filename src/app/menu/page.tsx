import CategoryCardContainer from "@/components/Category/CategoryCardContainer";
import axios from "axios";

const MenuPage = async () => {
  const data = await axios
    .get("http://localhost:8000/api/categories")
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return [];
    });

  return <CategoryCardContainer categories={data} />;
};

export default MenuPage;
