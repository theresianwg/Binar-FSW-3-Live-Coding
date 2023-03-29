class Product {
    // properti dari class
    title = 'DEFAULT';
    imageUrl;
    price;
    description;

    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
}

// console.log(newProduct());

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item'
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\Rp.${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Nambah ke Keranjang</button>
                </div>
            </div>
            `;
        return prodEl;
    }
}

// MAISH KURANG
class ShoppingCart {
    items = [];

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
        <h2>Total Belanja: \Rp.${0}</h2>
        <button
        `
    }
}

class ProductList {
    products = [
        new Product(
            'boneka',
            'https://id-live-03.slatic.net/p/4/tbo-boneka-beruang-besar-pink-1486346518-16737731-4201833266a8f2d6a86c865c1368a41f.jpg',
            20000,
            'ini boneka'
        ),
        new Product(
            'boneka',
            'https://id-live-03.slatic.net/p/4/tbo-boneka-beruang-besar-pink-1486346518-16737731-4201833266a8f2d6a86c865c1368a41f.jpg',
            20000,
            'ini boneka'
        ),
        new Product(
            'boneka',
            'https://id-live-03.slatic.net/p/4/tbo-boneka-beruang-besar-pink-1486346518-16737731-4201833266a8f2d6a86c865c1368a41f.jpg',
            20000,
            'ini boneka'
        ),
    ]

    constructor() {}

    // render() {
    //     const renderHook = document.getElementById('app');
    //     const prodList = document.createElement('ul');
    //     prodList.className = 'product-list';
    //     // <ul class='product-list'></ul>
    //     for (const product of this.products) {
    //         const prodEl = document.createElement('li');
    //         prodEl.className = 'product-item'
    //         // <li class='product-item'></li>
    //         prodEl.innerHTML = `
    //         <div>
    //             <img src="${product.imageUrl}" alt="${product.title}">
    //             <div class="product-item__content">
    //                 <h2>${product.title}</h2>
    //                 <h3>\Rp.${product.price}</h3>
    //                 <p>${product.description}</p>
    //                 <button>Nambah ke Keranjang</button>
    //             </div>
    //         </div>
    //         `;
    //         prodList.append(prodEl)
    //     }
    //     renderHook.append(prodList);
    // }

    
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const product of this.products) {
            const productItem = new ProductItem(product)
            const prodEl = productItem.render();
            prodList.append(prodEl)
        }
        // renderHook.append(prodList);
        return prodList;
    }
}

const productList = {
    products : [
        new Product(
            'boneka',
            'https://cf.shopee.co.id/file/da755599a59ef3ab4465c8e5d47208be',
            20000,
            'ini boneka lucu loh kayak fasil kita uwwwuwww'
            ),
        new Product(
            'boneka',
            'https://cf.shopee.co.id/file/da755599a59ef3ab4465c8e5d47208be',
            20000,
            'ini boneka lucu loh kayak fasil kita uwwwuwww'
            ),
        new Product(
            'boneka',
            'https://cf.shopee.co.id/file/da755599a59ef3ab4465c8e5d47208be',
            20000,
            'ini boneka lucu loh kayak fasil kita uwwwuwww'
            ),
        new Product(
            'boneka',
            'https://cf.shopee.co.id/file/da755599a59ef3ab4465c8e5d47208be',
            20000,
            'ini boneka lucu loh kayak fasil kita uwwwuwww'
            ),

    // {
    //     title: 'boneka',
    //     imageUrl: 'https://cf.shopee.co.id/file/da755599a59ef3ab4465c8e5d47208be',
    //     price: 20000,
    //     description: 'ini boneka lucu loh kayak fasil kita uwwwuwww'
    // },
    // {
    //     title: 'coklat',
    //     imageUrl: 'https://blogunik.com/wp-content/uploads/2018/08/15-Cokelat-Batang-Enak-dan-Murah-Yang-Bisa-Di-Temui-Di-Swalayan-15.jpg',
    //     price: 15000,
    //     description: 'ini coklat manis loh kayak fasil kita uwwwuwww'
    // },
    // {
    //     title: 'kaos',
    //     imageUrl: 'https://3.bp.blogspot.com/-ImrxYy5SLeI/UOkB-rwxaUI/AAAAAAAAoBE/row-oDjSJR0/s1600/go+to+work+ijo.jpg',
    //     price: 30000,
    //     description: 'ini kaos keren loh kayak fasil kita uwwwuwww'
    // },
], 

render(){
    // get... itu ambil app nya
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    // <ul class='product-list'></ul>

    // looping
        for (const product of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item'
            // <ul class='product-list'><li class='product-item'></li></ul>
            prodEl.innerHTML = `
            <div> 
                <img src="${product.imageUrl}" alt="${product.title}">
                <div class="product-item__content">
                    <h2>${product.title}</h2>
                    <h3>\Rp.${product.price}</h3>
                    <p>${product.description}</p>
                    <button>Nambah ke keranjang</button>
                </div>
            </div>
            `;
            prodList.append(prodEl)
        }
        renderHook.append(prodList);
    }
}

productList.render();