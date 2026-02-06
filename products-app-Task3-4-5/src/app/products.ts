// This describes what a product looks like
// The data comes from dummyjson.com API
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string; // The product image URL
}
