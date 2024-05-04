export type Category = {
  id: string;
  category_name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type TCategoryCard = {
  imageUrl: string;
  categoryName: string;
  name?: string;
  price?: string;
};
