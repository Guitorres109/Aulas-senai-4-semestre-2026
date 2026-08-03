async function carregarProdutos() {
    const container = document.querySelector(".container-produtos");

    try {
        const response = await fetch("https://fakestoreapi.com/products/category/electronics");
        const produtos = await response.json();

        // Embaralha os produtos
        const produtosAleatorios = produtos
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);


        const container = document.querySelector(".container-produtos");

        container.innerHTML = "";

        produtosAleatorios.forEach(produto => {
            container.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                    <img
                        src="${produto.image}"
                        class="card-img-top p-4 bg-white"
                        alt="${produto.title}"
                        style="height:250px; object-fit:contain;"
                    >

                    <div class="card-body d-flex flex-column">
                        <span class="badge bg-primary align-self-start mb-2">
                            ${produto.category}
                        </span>

                        <h5 class="card-title fw-bold">
                            ${produto.title}
                        </h5>

                        <p class="card-text text-muted small flex-grow-1">
                            ${produto.description.substring(0, 100)}...
                        </p>

                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <span class="fs-4 fw-bold text-success">
                                R$ ${produto.price}
                            </span>

                            <button class="btn btn-dark">
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });

    } catch (erro) {
        console.error("Erro ao carregar produtos:", erro);
    }
}

carregarProdutos();

async function carregarTabela() {
    const container = document.querySelector(".tabela-produtos");

    try {
        const response = await fetch("https://fakestoreapi.com/products/category/electronics");
        const produtos = await response.json();

        let html = `
            <table class="table table-hover table-striped table-bordered align-middle text-center">
                <thead class="table-dark">
                    <tr>
                        <th>Imagem</th>
                        <th>Produto</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
        `;

        produtos.forEach(produto => {
            html += `
                <tr>
                    <td>
                        <img src="${produto.image}"
                             alt="${produto.title}"
                             class="img-fluid produto-img">
                    </td>

                    <td class="fw-bold">
                        ${produto.title}
                    </td>

                    <td>
                        <span class="badge bg-primary">
                            ${produto.category}
                        </span>
                    </td>

                    <td class="text-success fw-bold">
                        R$ ${produto.price}
                    </td>

                    <td class="text-start">
                        ${produto.description.substring(0, 120)}...
                    </td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
        `;

        container.innerHTML = html;

    } catch (erro) {
        console.error(erro);
    }
}

carregarTabela();