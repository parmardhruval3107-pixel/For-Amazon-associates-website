document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const container = document.getElementById('products-container');
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <a href="${product.affiliateLink}" target="_blank" rel="noopener noreferrer sponsored nofollow">Buy on Amazon</a>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading products:', error));
});