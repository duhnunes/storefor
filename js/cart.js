const btnCart = document.querySelector('#cartBtn');
const body = document.querySelector('body');

btnCart.addEventListener('click', () => {
    createCartMenu();
});

const removeElement = (element) => {
    if(element && element.parentNode){
        element.parentNode.removeChild(element);
    }
}

//overlay
const removeOverlay = () => {
    const overlay = document.querySelector('.overlay-cart');
    removeElement(overlay);
}

// Create Cart Menu
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    
    return element;
}

const createProductCart = () => {
    const productCart = createElement('div', 'product-cart');
    const productImg = createElement('figure', 'product-cart-img');
    const productName = createElement('div', 'product-cart-name');
    const productDel = createElement('span', 'btn product-cart-del');

    const imgProduct = document.createElement('img');
    productCart.appendChild(productImg);
    productImg.appendChild(imgProduct)
    imgProduct.setAttribute('src', '../assets/products/daily/card-video.png');

    productCart.appendChild(productName);
    for (let i = 0; i < 3; i++) {
        let numberSelected = document.createElement('span');
        productName.appendChild(numberSelected);
    
        if (i === 0) {
            numberSelected.textContent = '1';
        } else if (i === 1) {
            numberSelected.textContent = 'x';
        } else if (i === 2) {
            numberSelected.textContent = 'Placa de Vídeo';
        }
        
    }
    
    productCart.appendChild(productDel);
    const trashIcon = createElement('i', 'fa-solid fa-trash-can');
    productDel.appendChild(trashIcon);

    return productCart;
}

const createCartMenu = () => {
    const overlayCart = createElement('section', 'overlay-cart');
    const cart = createElement('section', 'cart');

    const h2 = document.createElement('h2');

    const cartBody = createElement('div', 'cart-body');

    const footer = createElement('div', 'cart-footer');
    const footerBtn = createElement('a', 'btn -goCart');

    body.appendChild(overlayCart);
    overlayCart.appendChild(cart);
    
    cart.appendChild(h2);
    h2.innerText = "Carrinho de Compras";
    h2.className = 'title -headerCart';
    setTimeout(() => {
        cart.classList.add('active');
    }, 50);

    cart.appendChild(cartBody);
    const productCart = createProductCart();
    cartBody.appendChild(productCart);

    cart.appendChild(footer);
    footer.appendChild(footerBtn);
    footerBtn.textContent = 'Ir para o Carrinho';
    footerBtn.href = '#';

    overlayCart.addEventListener('click', (event) => {
        if(event.target === overlayCart){
            setTimeout(() => {
                removeOverlay();
            }, 500)
            cart.classList.remove('active');
        }
    });

    return overlayCart;
}

