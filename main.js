const displayLocalStorageCart = () => {
    const cart = getCart();
    for(const book in cart){
        displayBooks(book)
    }
}

const addItem = () => {
    const nameField = document.getElementById('book-name');
    const name = nameField.value;
    if(!name){
        alert('Please enter a book name.')
        return;
    }
    // display books in the UI
    displayBooks(name);

    // create in localStorage
    addBookToCart(name);
    nameField.value = '';
}

const displayBooks = name =>{
    const ol = document.getElementById('books');
    const li = document.createElement('li');
    li.innerText = name;
    ol.appendChild(li);
}

const getCart = () =>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}
displayLocalStorageCart();

const addBookToCart = name => {
    const cart = getCart();
    if(cart[name]){
        cart[name] = cart[name] + 1;
    }
    else{
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const deleteBook = () =>{
    document.getElementById('books').textContent= '';
    localStorage.removeItem('cart');
}
