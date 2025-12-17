// Menu items data
const menuItems = [
    // Bihari Specialties
    {
        id: 31,
        name: 'Litti Chokha',
        category: 'bihari-special',
        price: 120,
        popular: true,
        mustTry: true,
        description: 'Traditional Bihari dish - roasted wheat balls stuffed with sattu, served with baingan bharta and potato chokha.'
    },
    {
        id: 32,
        name: 'Sattu Paratha',
        category: 'bihari-special',
        price: 80,
        bestseller: true,
        description: 'Healthy and nutritious paratha stuffed with roasted gram flour and spices.'
    },
    {
        id: 33,
        name: 'Chana Ghugni',
        category: 'bihari-special',
        price: 70,
        description: 'Spicy curry made with black chickpeas, best enjoyed with poori or rice.'
    },
    {
        id: 34,
        name: 'Dal Pitha',
        category: 'bihari-special',
        price: 90,
        description: 'Steamed rice flour dumplings stuffed with spiced lentil filling.'
    },
    {
        id: 35,
        name: 'Thekua',
        category: 'sweets',
        price: 50,
        description: 'Traditional Bihari sweet snack made with wheat flour, jaggery, and ghee.'
    },
    
    // UP Specialties
    {
        id: 36,
        name: 'Bedmi Puri with Aloo Sabzi',
        category: 'up-special',
        price: 100,
        popular: true,
        description: 'Deep-fried bread made with urad dal stuffing, served with spiced potato curry.'
    },
    {
        id: 37,
        name: 'Kachori Sabzi',
        category: 'up-special',
        price: 90,
        description: 'Crispy kachori served with spicy potato curry, a breakfast favorite.'
    },
    {
        id: 38,
        name: 'Baati Chokha',
        category: 'up-special',
        price: 110,
        description: 'Hard wheat rolls served with mashed potato and brinjal mash.'
    },
    {
        id: 39,
        name: 'Malaiyo',
        category: 'sweets',
        price: 70,
        bestseller: true,
        description: 'Creamy dessert from Varanasi, made with milk froth and saffron.'
    },
    
    // Shakes & Cold Drinks
    {
        id: 40,
        name: 'Mango Lassi',
        category: 'beverages',
        price: 90,
        refreshing: true,
        description: 'Creamy yogurt blended with fresh mango pulp and a hint of cardamom.'
    },
    {
        id: 41,
        name: 'Thandai',
        category: 'beverages',
        price: 80,
        description: 'Traditional cold drink made with milk, nuts, and aromatic spices.'
    },
    {
        id: 42,
        name: 'Rose Lassi',
        category: 'beverages',
        price: 85,
        refreshing: true,
        description: 'Sweet lassi flavored with rose syrup and topped with rose petals.'
    },
    
    // Ice Creams
    {
        id: 43,
        name: 'Kulfi Falooda',
        category: 'ice-creams',
        price: 120,
        special: true,
        description: 'Traditional Indian ice cream with vermicelli, basil seeds, and rose syrup.'
    },
    {
        id: 44,
        name: 'Rabri Kulfi',
        category: 'ice-creams',
        price: 110,
        description: 'Creamy kulfi served with reduced milk rabri and nuts.'
    },
    {
        id: 45,
        name: 'Mango Kulfi',
        category: 'ice-creams',
        price: 100,
        description: 'Creamy mango-flavored kulfi, perfect for summer.'
    },
    
    // Chaat & Snacks
    {
        id: 1,
        name: 'Pani Puri',
        category: 'starters',
        price: 50,
        popular: true,
        description: 'Crispy puris filled with spicy water, tamarind chutney, and potato filling.'
    },
    {
        id: 2,
        name: 'Vada Pav',
        category: 'starters',
        price: 60,
        description: 'Spicy potato fritter in a bun with chutneys, a Mumbai street food favorite.'
    },
    {
        id: 3,
        name: 'Pav Bhaji',
        category: 'starters',
        price: 100,
        bestseller: true,
        description: 'Spicy vegetable curry served with buttered buns, a Mumbai classic.'
    },
    {
        id: 4,
        name: 'Samosa (2 pcs)',
        category: 'starters',
        price: 50,
        description: 'Crispy pastry filled with spiced potatoes and peas.'
    },
    {
        id: 5,
        name: 'Chole Samosa',
        category: 'starters',
        price: 70,
        description: 'Crispy samosas served with spicy chickpea curry.'
    },
    
    // South Indian
    {
        id: 6,
        name: 'Masala Dosa',
        category: 'main-course',
        price: 80,
        special: true,
        description: 'Crispy rice crepe filled with spiced potato filling, served with sambar and chutney.'
    },
    {
        id: 7,
        name: 'Plain Dosa',
        category: 'main-course',
        price: 60,
        description: 'Classic crispy rice crepe served with sambar and coconut chutney.'
    },
    {
        id: 8,
        name: 'Idli Sambhar (3 pcs)',
        category: 'main-course',
        price: 70,
        description: 'Steamed rice cakes served with lentil soup and coconut chutney.'
    },
    {
        id: 9,
        name: 'Uttapam',
        category: 'main-course',
        price: 90,
        description: 'Savory rice pancake topped with onions, tomatoes, and green chilies.'
    },
    {
        id: 10,
        name: 'Medu Vada (2 pcs)',
        category: 'starters',
        price: 60,
        description: 'Crispy, fluffy lentil fritters served with sambar and chutney.'
    },
    
    // North Indian
    {
        id: 11,
        name: 'Chole Bhature',
        category: 'main-course',
        price: 120,
        popular: true,
        description: 'Spicy chickpea curry served with deep-fried bread.'
    },
    {
        id: 12,
        name: 'Paneer Tikka',
        category: 'starters',
        price: 150,
        description: 'Grilled cottage cheese cubes marinated in spices.'
    },
    {
        id: 13,
        name: 'Dal Makhani',
        category: 'main-course',
        price: 130,
        description: 'Creamy black lentils slow-cooked with butter and cream.'
    },
    {
        id: 14,
        name: 'Butter Naan',
        category: 'breads',
        price: 50,
        description: 'Soft leavened bread cooked in a tandoor, brushed with butter.'
    },
    {
        id: 15,
        name: 'Shahi Paneer',
        category: 'main-course',
        price: 160,
        description: 'Cottage cheese cubes in a rich, creamy tomato-based gravy.'
    },
    
    // Chaat & Snacks
    {
        id: 16,
        name: 'Bhel Puri',
        category: 'starters',
        price: 60,
        description: 'Puffed rice mixed with vegetables and tangy tamarind chutney.'
    },
    {
        id: 17,
        name: 'Sev Puri',
        category: 'starters',
        price: 70,
        description: 'Crispy puris topped with potatoes, chutneys, and sev.'
    },
    {
        id: 18,
        name: 'Dahi Puri',
        category: 'starters',
        price: 80,
        mustTry: true,
        description: 'Hollow puris filled with yogurt, chutneys, and spices.'
    },
    {
        id: 19,
        name: 'Papdi Chaat',
        category: 'starters',
        price: 75,
        description: 'Crispy flour wafers topped with yogurt, chutneys, and spices.'
    },
    {
        id: 20,
        name: 'Aloo Tikki Chaat',
        category: 'starters',
        price: 80,
        description: 'Spiced potato patties topped with yogurt and chutneys.'
    },
    
    // Beverages
    {
        id: 21,
        name: 'Masala Chai',
        category: 'beverages',
        price: 50,
        description: 'Spiced Indian tea with milk and aromatic spices.'
    },
    {
        id: 22,
        name: 'Sweet Lassi',
        category: 'beverages',
        price: 70,
        refreshing: true,
        description: 'Sweet yogurt-based drink, perfect for summers.'
    },
    {
        id: 23,
        name: 'Fresh Juice',
        category: 'beverages',
        price: 80,
        description: 'Seasonal fresh fruit juice.'
    },
    {
        id: 24,
        name: 'Buttermilk',
        category: 'beverages',
        price: 60,
        description: 'Refreshing spiced buttermilk.'
    },
    {
        id: 25,
        name: 'Cold Coffee',
        category: 'beverages',
        price: 90,
        description: 'Chilled coffee with milk and ice cream.'
    },
    
    // Kids Special
    {
        id: 26,
        name: 'Mini Dosa',
        category: 'kids',
        price: 60,
        description: 'Smaller version of dosa, perfect for kids.'
    },
    {
        id: 27,
        name: 'Cheese Paratha',
        category: 'kids',
        price: 80,
        description: 'Whole wheat bread stuffed with cheese.'
    },
    {
        id: 28,
        name: 'Sweet Puri',
        category: 'kids',
        price: 70,
        description: 'Sweet fried bread, a favorite among children.'
    },
    {
        id: 29,
        name: 'Chocolate Milk',
        category: 'beverages',
        price: 60,
        description: 'Cold milk with chocolate syrup.'
    },
    {
        id: 30,
        name: 'Fruit Milkshake',
        category: 'beverages',
        price: 80,
        description: 'Blended milk with seasonal fruits.'
    }
];

// Function to display menu items
function displayMenuItems(category = 'all') {
    const menuContainer = document.getElementById('menu-items');
    if (!menuContainer) return;
    
    // Filter items based on category
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    // Group items by category
    const categories = [...new Set(menuItems.map(item => item.category))];
    
    let html = '';
    
    // Only show category headers if showing all items
    if (category === 'all') {
        categories.forEach(cat => {
            const categoryItems = menuItems.filter(item => item.category === cat);
            if (categoryItems.length > 0) {
                html += `
                <div class="menu-category">
                    <h3 class="category-title">${formatCategoryName(cat)}</h3>
                    <div class="menu-category-items">
                        ${categoryItems.map(item => createMenuItemHTML(item)).join('')}
                    </div>
                </div>`;
            }
        });
    } else {
        // Show items without category headers when filtered
        html = filteredItems.map(item => createMenuItemHTML(item)).join('');
    }
    
    menuContainer.innerHTML = html || '<p class="no-items">No items found in this category.</p>';
}

// Helper function to format category names
function formatCategoryName(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Helper function to create menu item HTML
function createMenuItemHTML(item) {
    return `
    <div class="menu-item" data-category="${item.category}">
        <div class="menu-item-content">
            <div class="menu-item-header">
                <h4 class="menu-item-title">${item.name}</h4>
                <span class="menu-item-price">₹${item.price}</span>
            </div>
            ${item.description ? `<p class="menu-item-description">${item.description}</p>` : ''}
            <div class="menu-item-badges">
                <span class="pure-veg-badge"><i class="fas fa-leaf"></i> Pure Veg</span>
                ${item.popular ? '<span class="badge popular">Popular</span>' : ''}
                ${item.bestseller ? '<span class="badge bestseller">Bestseller</span>' : ''}
                ${item.special ? '<span class="badge special">Chef Special</span>' : ''}
                ${item.mustTry ? '<span class="badge must-try">Must Try</span>' : ''}
                ${item.refreshing ? '<span class="badge refreshing">Refreshing</span>' : ''}
            </div>
        </div>
        <button class="btn btn-primary add-to-cart" data-id="${item.id}">
            Add to Cart
        </button>
    </div>`;
}

// Initialize menu when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Display all menu items by default
    displayMenuItems();
    
    // Add click event listeners to category buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Filter menu items
            const category = btn.getAttribute('data-category');
            displayMenuItems(category);
        });
    });
});
