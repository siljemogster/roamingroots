const { pathname } = location;

console.log(pathname);

switch (pathname) {
  case "/":
  case "/index.html":
    displayProducts();
    console.log("home");
    break;
  case "/product.html":
    displayProduct();
    break;
}
