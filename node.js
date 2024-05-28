function exibirProdutosNoCarrinho() {
  const productsContainer = document.querySelector('.products-container');
  productsContainer.innerHTML = ''; // Limpa o conteúdo atual

  const produtosNoCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  produtosNoCarrinho.forEach((produto, index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
      <div class="product-details">
        <img src="${produto.imagem}" alt="${produto.nome}" class="product-image details-image">
        <h2 class="product-title">${produto.nome}</h2>
        <p class="product-price">R$ ${produto.preco.toFixed(2)}</p>
        <a href="#" class="details-link" onclick="openModal('${produto.imagem}', '${produto.nome}')">Ver Detalhes</a>
        <button class="add-to-cart-button neon-button" data-nome="${produto.nome}" data-preco="${produto.preco}" data-imagem="${produto.imagem}">Adicionar ao Carrinho</button>
        <a href="https://api.whatsapp.com/send?phone=+5511911454585&text=Ops... ${produto.nome} nao foi adicionado no carrinho!" class="contact-button">Fale Conosco no WhatsApp</a>
        <button class="back-button" onclick="closeModal()">Voltar</button>
      </div>
    `;

    productsContainer.appendChild(productDiv);
  });
}
