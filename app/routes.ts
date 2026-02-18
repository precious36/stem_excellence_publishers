import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("books", "routes/books.tsx"),
  route("for-authors", "routes/for-authors.tsx"),
  route("services", "routes/services.tsx"),
  route("blog", "routes/blog.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
