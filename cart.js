
// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart if it doesn't exist
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    // Add click handlers to all "Add to Basket" buttons
    document.querySelectorAll('.product-card button').forEach(button => {
        if (button.textContent.trim() === 'Add to Basket') {
            button.addEventListener('click', function() {
                const productCard = this.closest('.product-card');
                const productId = this.closest('.product-card').querySelector('a[href^="sepprod.html"]')?.href.split('id=')[1] || 'unknown';
                
                const product = {
                    id: productId,
                    name: productCard.querySelector('h3').textContent,
                    price: productCard.querySelector('.price').textContent.split(' ')[0], // Get just the price number
                    image: productCard.querySelector('img').src,
                    rating: productCard.querySelector('.rating')?.textContent || '★★★★☆',
                    delivery: productCard.querySelector('.delivery')?.textContent || 'Delivery information not available'
                };

                addToCart(product);
                alert(`${product.name} added to cart!`);
            });
        }
    });

    function addToCart(product) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            product.quantity = 1;
            cart.push(product);
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart if it doesn't exist
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    // Add click handlers to all "Add to Basket" buttons
    document.querySelectorAll('.product-card button').forEach(button => {
        if (button.textContent.trim() === 'Add to Basket' || button.textContent.trim() === 'Add to basket') {
            button.addEventListener('click', function() {
                const productCard = this.closest('.product-card');
                const productLink = productCard.querySelector('a[href^="sepprod.html"]');
                const productId = productLink ? productLink.href.split('id=')[1] : 'unknown-' + Math.random().toString(36).substr(2, 9);
                
                const product = {
                    id: productId,
                    name: productCard.querySelector('h3').textContent,
                    price: productCard.querySelector('.price').textContent.split(' ')[0], // Get just the price number
                    image: productCard.querySelector('img').src,
                    rating: productCard.querySelector('.rating')?.textContent || '★★★★☆',
                    delivery: productCard.querySelector('.delivery')?.textContent || 'Delivery information not available',
                    category: productCard.closest('.category-section')?.querySelector('h2')?.textContent || 'Uncategorized'
                };

                addToCart(product);
                alert(`${product.name} added to cart!`);
            });
        }
    });

    function addToCart(product) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            product.quantity = 1;
            cart.push(product);
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});
