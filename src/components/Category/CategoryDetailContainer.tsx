"use client";

import { SubCategory } from "@/utils/types/subCategoryTypes";
import { FC } from "react";
import CategoryCard from "./CategoryCard";
import Link from "next/link";

type CategoryDetailContainerProps = {
  subCategories: SubCategory[];
};

const CategoryDetailContainer: FC<CategoryDetailContainerProps> = ({
  subCategories,
}) => {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center">
      {subCategories.map((subCategory) => (
        <Link key={subCategory.id} href={`/product-list/${subCategory.id}`}>
          <CategoryCard
            imageUrl={subCategory.image}
            categoryName={subCategory.sub_category_name}
          />
        </Link>
      ))}
    </div>
  );
};

export default CategoryDetailContainer;
