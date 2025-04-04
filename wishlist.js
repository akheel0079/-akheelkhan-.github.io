
// Wishlist functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize wishlist if it doesn't exist
    if (!localStorage.getItem('wishlist')) {
        localStorage.setItem('wishlist', JSON.stringify([]));
    }

    // Add click handlers to all "Add to wishlist" buttons
    document.querySelectorAll('.product-card button').forEach(button => {
        if (button.textContent.trim() === 'Add to wishlist') {
            button.addEventListener('click', function() {
                const productCard = this.closest('.product-card');
                const productLink = productCard.querySelector('a[href^="sepprod.html"]');
                const productId = productLink ? productLink.href.split('id=')[1] : 'unknown-' + Math.random().toString(36).substr(2, 9);
                
                const product = {
                    id: productId,
                    name: productCard.querySelector('h3').textContent,
                    price: productCard.querySelector('.price').textContent.split(' ')[0],
                    image: productCard.querySelector('img').src,
                    rating: productCard.querySelector('.rating')?.textContent || '★★★★☆',
                    delivery: productCard.querySelector('.delivery')?.textContent || 'Delivery information not available',
                    category: productCard.closest('.category-section')?.querySelector('h2')?.textContent || 'Uncategorized'
                };

                addToWishlist(product);
                alert(`${product.name} added to wishlist!`);
            });
        }
    });

    function addToWishlist(product) {
        const wishlist = JSON.parse(localStorage.getItem('wishlist'));
        const existingItem = wishlist.find(item => item.id === product.id);
        
        if (!existingItem) {
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        } else {
            alert('This item is already in your wishlist!');
        }
    }
});
