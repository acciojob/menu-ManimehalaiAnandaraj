import React , {useState} from 'react';


function Menu({ items, activeCategory, setActiveCategory }) {
  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section className="menu">
      <h1>Our Menu</h1>
      
      <div className="filter-buttons">
        <button 
          id="filter-btn" 
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        <button 
          id="filter-btn-1" 
          onClick={() => setActiveCategory('breakfast')}
        >
          Breakfast
        </button>
        <button 
          id="filter-btn-2" 
          onClick={() => setActiveCategory('lunch')}
        >
          Lunch
        </button>
        <button 
          id="filter-btn-3" 
          onClick={() => setActiveCategory('shakes')}
        >
          Shakes
        </button>
      </div>
      
      <div className="menu-items">
        {filteredItems.map(item => (
          <article 
            key={item.id} 
            className="menu-item"
            data-test-id={`menu-item-${item.category}`}
          >
            <img src={item.img} alt={item.name} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.name}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p className="item-text">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Menu;