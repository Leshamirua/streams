class ApiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getAllProducts() {
        const response = await fetch(`${this.baseUrl}/products`);
        const data = await response.json();
        return data;
    }

    async createProduct(product) {
        const response = await fetch(`${this.baseUrl}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        return data;
    }

    async updateProduct(id, updatedProduct) {
        const response = await fetch(`${this.baseUrl}/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        });
        const data = await response.json();
        return data;
    }

    async deleteProduct(id) {
        const response = await fetch(`${this.baseUrl}/products/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            return 'Product deleted successfully';
        } else {
            throw new Error('Failed to delete product');
        }
    }
}

const api = new ApiService('http://localhost:3000');

api.getAllProducts().then(products => console.log(products));

// проверка: добавить новый продукт
const newProduct = { name: 'Product 4', price: 400 };
api.createProduct(newProduct).then(product => console.log(product));

// проверка: обновить продукт
const updatedProduct = { name: 'Updated Product 2', price: 250 };
api.updateProduct(2, updatedProduct).then(product => console.log(product));

//  проверка: удалить продукт
api.deleteProduct(3).then(message => console.log(message));
