export type MenuItem = {
  id: string;
  name: string;
  category: 'Minuman' | 'Makanan';
  price: number;
  desc: string;
};

export const menuItems: MenuItem[] = [
  { id: '1', name: 'Espresso', category: 'Minuman', price: 28000, desc: 'Shot espresso klasik' },
  { id: '2', name: 'Caffè Latte', category: 'Minuman', price: 32000, desc: 'Espresso + susu steamed' },
  { id: '3', name: 'Cappuccino', category: 'Minuman', price: 32000, desc: 'Espresso + foam tebal' },
  { id: '4', name: 'Matcha Latte', category: 'Minuman', price: 35000, desc: 'Matcha premium + susu' },
  { id: '5', name: 'Croissant', category: 'Makanan', price: 25000, desc: 'Buttery flaky croissant' },
  { id: '6', name: 'Banana Bread', category: 'Makanan', price: 28000, desc: 'Moist banana bread' },
  { id: '7', name: 'Chicken Sandwich', category: 'Makanan', price: 38000, desc: 'Grain bread, ayam, sayur' },
  { id: '8', name: 'Classic Tiramisu', category: 'Makanan', price: 35000, desc: 'Klasik Italia' },
];
