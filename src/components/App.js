import React, { useState } from 'react';
import Menu from './Menu';
import './../styles/App.css';

function App() {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'Buttermilk Pancakes',
      category: 'breakfast',
      price: 15.99,
      description: 'Fluffy pancakes with buttermilk',
      img: 'pancakes.jpg'
    },
    {
      id: 2,
      name: 'Diner Double',
      category: 'lunch',
      price: 13.99,
      description: 'Double cheeseburger with fries',
      img: 'burger.jpg'
    },
    // Add more items for all categories
  ]);
  
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <main id="main">
      <Menu 
        items={menuItems} 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </main>
  );
}

export default App;