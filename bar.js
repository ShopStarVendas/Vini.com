// JavaScript para direcionar para a página de menu quando o ícone do menu é clicado
const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", function () {
    window.location.href = "404.html"; // Altere o URL para o caminho correto do menu.html
});
/* lupa */
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    const produtos = document.querySelectorAll('.product');

    produtos.forEach(product => {
        const title = product.querySelector('.product-title').textContent.toLowerCase();
        const productVisible = title.includes(searchTerm);

        if (searchTerm === '' || productVisible) {
            product.style.display = 'block'; // Exibe o produto
        } else {
            product.style.display = 'none'; // Oculta o produto
        }
    });
}
