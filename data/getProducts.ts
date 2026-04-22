import products from "./products.json";

// Define the shape of a single product
export type Product = {
    id: string;
    name: string;
    category: string;
    description: string;
    unit: string;
    price: number;
    emoji: string;
    badge: string | null;
};

// This simulates what a real DB/API call would look like.
// In production you'd replace this body with:
// const res = await fetch("https://your-api.com/products")
// return res.json()

export async function getProducts(): Promise<Product[]> {
  // Simulate network delay
  
  return products as Product[];
}
