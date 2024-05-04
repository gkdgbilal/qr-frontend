import { Category } from "@/utils/types/categoryTypes";
import Link from "next/link";
import React, { FC } from "react";
import CategoryCard from "./CategoryCard";

type CategoryCardContainerProps = {
  categories: Category[];
};

const CategoryCardContainer: FC<CategoryCardContainerProps> = ({
  categories,
}) => {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center">
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.id}`}>
          <CategoryCard
            imageUrl={category.image}
            categoryName={category.category_name}
          />
        </Link>
      ))}
    </div>
  );
};

export default CategoryCardContainer;
