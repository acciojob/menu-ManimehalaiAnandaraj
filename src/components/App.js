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
     img: 'https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 2,
      name: 'Diner Double',
      category: 'lunch',
      price: 13.99,
      description: 'Double cheeseburger with fries',
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww'
    },

     {
      id: 3,
      name: 'Buttermilk Pancakes',
      category: 'breakfast',
      price: 15.99,
      description: 'Fluffy pancakes with buttermilk',
     img: 'https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 4,
      name: 'Diner Double',
      category: 'lunch',
      price: 13.99,
      description: 'Double cheeseburger with fries',
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww'
    },

     {
      id: 5,
      name: 'Buttermilk Pancakes',
      category: 'shakes',
      price: 15.99,
      description: 'Fluffy pancakes with buttermilk',
     img: 'https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 6,
      name: 'Diner Double',
      category: 'shakes',
      price: 13.99,
      description: 'Double cheeseburger with fries',
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww'
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