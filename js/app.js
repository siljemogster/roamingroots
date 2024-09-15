const { pathname } = location;

console.log(pathname);

switch (pathname) {
  case "/":
  case "/index.html":
    break;
  case "/posts.html":
    displayPost();
    break;
}
