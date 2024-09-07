const { pathname } = location;

console.log(pathname);

switch (pathname) {
  case "/":
  case "/index.html":
    displayPosts();
    console.log("home");
    break;
  case "/post.html":
    displayPost();
    break;
}
