const { pathname } = location;

console.log(pathname);

switch (pathname) {
  case "/":
  case "/index.html":
    displayPosts();
    break;
  case "/posts.html":
    displayPost();
    break;
}