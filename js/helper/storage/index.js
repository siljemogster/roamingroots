export function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
  
  export function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  export function removeItemFromCart(id) {
    const cart = getCart();
    const excistingItem = cart.find((item) => item.id === id);
  
    if (excistingItem.quantity > 1) {
      excistingItem.quantity -= 1;
      saveCart(cart);
    } else {
      const newCart = cart.filter((item) => item.id !== id);
      saveCart(newCart);
    }
  }
  
  export function addItemToCart(item) {
    const cart = getCart();
    const excistingItem = cart.find((cartItem) => cartItem.id === item.id);
    console.log("excistingItem", excistingItem);
  
    if (!existingItem) {
      cart.push({ ...item, quantity: 1 });
      saveCart(cart);
      return;
    } else {
      excistingItem.quantity += 1;
      saveCart(cart);
    }
  }
  
  export function getTotal() {
    const cart = getCart();
  
    return cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }
  
  export function getItemCount() {}
  