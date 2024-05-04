import { httpService } from "@/services/HttpService";

export const fetchCategoryData = async () => {
  try {
    const response = await httpService("http://localhost:8000/api/categories");

    return response;
  } catch (error) {
    return [];
  }
};
