export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  date?: string;
  imgUrl?: string;
  soldOut?: boolean;
  onSale?: boolean;
}
