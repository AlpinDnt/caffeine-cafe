export type MenuItem = {
  id: string;
  name: string;
  category: 'Minuman' | 'Makanan';
  price: number;
  desc: string;
  image: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop`;

export const menuItems: MenuItem[] = [
  { id: '1', name: 'Espresso', category: 'Minuman', price: 28000, desc: 'Shot espresso klasik', image: img('photo-1495474472287-4d71bcdd2085') },
  { id: '2', name: 'Caffè Latte', category: 'Minuman', price: 32000, desc: 'Espresso + susu steamed', image: img('photo-1509042239860-f550ce710b93') },
  { id: '3', name: 'Cappuccino', category: 'Minuman', price: 32000, desc: 'Espresso + foam tebal', image: img('photo-1447933601403-0c6688de566e') },
  { id: '4', name: 'Matcha Latte', category: 'Minuman', price: 35000, desc: 'Matcha premium + susu', image: img('photo-1445116572660-236099ec97a0') },
  { id: '5', name: 'Croissant', category: 'Makanan', price: 25000, desc: 'Buttery flaky croissant', image: img('photo-1555507036-ab1f4038808a') },
  { id: '6', name: 'Banana Bread', category: 'Makanan', price: 28000, desc: 'Moist banana bread', image: img('photo-1504754524776-8f4f37790ca0') },
  { id: '7', name: 'Chicken Sandwich', category: 'Makanan', price: 38000, desc: 'Grain bread, ayam, sayur', image: img('photo-1528735602780-2552fd46c7af') },
  { id: '8', name: 'Classic Tiramisu', category: 'Makanan', price: 35000, desc: 'Klasik Italia', image: img('photo-1551024506-0bccd828d307') },
];
