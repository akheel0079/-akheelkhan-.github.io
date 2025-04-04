// js/search.js
function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm) {
        // Convert products object to array and filter
        const results = Object.entries(products).map(([id, product]) => ({
            id,
            ...product
        })).filter(product => 
            product.title.toLowerCase().includes(searchTerm) || 
            (product.specs?.Brand?.toLowerCase().includes(searchTerm)) ||
            (product.specs?.Model?.toLowerCase().includes(searchTerm)));
        
        // Store results and redirect
        sessionStorage.setItem('searchResults', JSON.stringify(results));
        sessionStorage.setItem('searchTerm', searchTerm);
        window.location.href = 'search-results.html';
    }
}

// Initialize search event listeners
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
    
    searchIcon?.addEventListener('click', performSearch);
    searchInput?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
});