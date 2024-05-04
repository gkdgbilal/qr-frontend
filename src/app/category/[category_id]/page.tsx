import CategoryDetailContainer from "@/components/Category/CategoryDetailContainer";
import axios from "axios";

const CategoryDetailPage = async ({
  params,
}: {
  params: { category_id: string };
}) => {
  const categoryId = params.category_id;

  const data = await axios
    .get(`http://localhost:8000/api/sub-categories/category/${categoryId}`)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return [];
    });

  return <CategoryDetailContainer subCategories={data} />;
};

export default CategoryDetailPage;
