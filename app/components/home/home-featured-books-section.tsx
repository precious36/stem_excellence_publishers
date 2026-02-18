import { Link } from "react-router";

const featuredBooks = [
  {
    title: "Introduction to Robotics",
    subtitle: "A Student Guide",
    style: "from-sky-900 via-blue-700 to-indigo-500",
  },
  {
    title: "Essential Mathematics",
    subtitle: "Volume One",
    style: "from-blue-950 via-blue-700 to-cyan-500",
  },
  {
    title: "Practical Mathematics",
    subtitle: "Applied Edition",
    style: "from-emerald-900 via-green-700 to-lime-400",
  },
  {
    title: "Science & Outreach",
    subtitle: "For Future Innovators",
    style: "from-amber-700 via-orange-500 to-yellow-300",
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
            <article key={book.title} className="home-book-card">
              <div className={`home-book-cover bg-gradient-to-b ${book.style}`}>
                <p className="home-book-subtitle">{book.subtitle}</p>
                <h3 className="home-book-title">{book.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="home-books-action">
          <Link className="ref-btn ref-btn-secondary" to="/books">
            View All Books
          </Link>
        </div>
      </div>
    </section>
  );
}
