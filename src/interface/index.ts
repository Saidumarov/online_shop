export interface ProductType {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  count: number;
  rating: { rate: number; count: number };
}
