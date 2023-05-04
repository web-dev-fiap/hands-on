let senha = '';
do {
    senha = prompt('Digite a sua senha:');
} while (senha !== 'senha123');

alert(`Acesso Permitido!`);

let produtoEmEstoque = 10;
do {
    console.log('Ainda temos esse produto em estoque');
    console.log(`Quantidade em estoque: ${produtoEmEstoque}`);
    produtoEmEstoque--;

    if (produtoEmEstoque === 4) {
        alert('Atenção!!! Estoque está baixo, temos apenas 04 produtos');
    }
} while (produtoEmEstoque >= 0);
console.log(`Atenção, produto indisponível - Estoque = 0`);
