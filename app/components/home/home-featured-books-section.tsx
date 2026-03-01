import { Link } from "react-router";

const FEATURED_BOOK_PRICE = "K20,0000 (Locally in Malawi)";

const featuredBooks = [
  {
    title: "Chemistry For Malawi",
    subtitle: "Student's Book 1",
    image: "/red front.jpg",
    author: "Blessings G. Malimusi & Trust P. Chifunga",
    price: FEATURED_BOOK_PRICE,
    isbn: "ISBN 978-99960-099-5-2",
    readingAge: "12-18+",
    language: "English",
    publishDate: "26 Feb. 2026",
    amazonUrl: "https://amzn.eu/d/0dvUgZea",
  },
  {
    title: "Chemistry For Malawi",
    subtitle: "Student's Book 2",
    image: "/blue front.jpg",
    author: "Trust P. Chifunga & Blessings G. Malimusi",
    price: FEATURED_BOOK_PRICE,
    isbn: "ISBN 978-99960-099-6-9",
    readingAge: "12-18+",
    language: "English",
    publishDate: "26 Feb. 2026",
    amazonUrl: "https://amzn.eu/d/04uudMAU",
  },
  {
    title: "Chemistry For Malawi",
    subtitle: "Student's Book 3",
    image: "/dark blue front.jpg",
    author: "Blessings G. Malimusi & Trust P. Chifunga",
    price: FEATURED_BOOK_PRICE,
    isbn: "ISBN 978-99960-099-7-6",
    readingAge: "12-18+",
    language: "English",
    publishDate: "26 Feb. 2026",
    amazonUrl: "https://amzn.eu/d/08sYkXAR",
  },
  {
    title: "Chemistry For Malawi",
    subtitle: "Student's Book 4",
    image: "/brown front.jpg",
    author: "Trust P. Chifunga & Blessings G. Malimusi",
    price: FEATURED_BOOK_PRICE,
    isbn: "ISBN 978-99960-082-4-5",
    readingAge: "12-18+",
    language: "English",
    publishDate: "25 Feb. 2026",
    amazonUrl: "https://amzn.eu/d/062tUX08",
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
                <div className="home-book-cover-media">
                  <img
                    src={book.image}
                    alt={`${book.title} ${book.subtitle} cover`}
                    className="home-book-cover-image"
                  />
                </div>
              </div>
              <p className="home-book-subtitle">{book.subtitle}</p>
              <h3 className="home-book-title">{book.title}</h3>
              <p><b>Authors:</b> {book.author}</p>
              <p className="home-book-price">Price: {book.price}</p>
              <p className="home-book-meta">Reading age: {book.readingAge}</p>
              <p className="home-book-meta">Language: {book.language}</p>
              <p className="home-book-meta">Publication date: {book.publishDate}</p>
              <p className="home-book-meta">{book.isbn}</p>
              <a
                className="home-book-amazon-link"
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Amazon
              </a>
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
