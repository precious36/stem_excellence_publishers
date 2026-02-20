import { Link } from "react-router";

const featuredBooks = [
  {
    title: "Chemistry For Malawi",
    subtitle: "Student's Book 1",
    image: "/red front.jpg",
  },
  {
    title: "Chemistry For Malawi",
    subtitle: "Student's Book 2",
    image: "/blue front.jpg",
  },
  {
    title: "Chemistry For Malawi",
    subtitle: "Student's Book 3",
    image: "/dark blue front.jpg",
  },
  {
    title: "Chemistry For Malawi",
    subtitle: "Student's Book 4",
    image: "/brown front.jpg",
  },
];

export function HomeFeaturedBooksSection() {
  return (
    <section className="home-books">
      <div className="site-container">
        <div className="home-section-heading">
          <span>Featured Books</span>
        </div>

        <div className="home-books-grid">
          {featuredBooks.map((book) => (
            <article key={book.subtitle} className="home-book-card">
              <div className="home-book-cover">
                <img
                  src={book.image}
                  alt={`${book.title} ${book.subtitle} cover`}
                  className="home-book-cover-image"
                />
              </div>
              <p className="home-book-subtitle">{book.subtitle}</p>
              <h3 className="home-book-title">{book.title}</h3>
            </article>
          ))}
        </div>

        <div className="home-books-action">
          <Link className="ref-btn ref-btn-secondary" to="/books">
            Explore all books
          </Link>
        </div>
      </div>
    </section>
  );
}
