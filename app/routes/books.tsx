import { useMemo, useState } from "react";

import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/books";

const BOOK_PRICE_KWACHA = 20000;

function formatKwacha(amount: number) {
  return `K${amount.toLocaleString("en-US")}`;
}

const bookCatalogue = [
  {
    title: "Chemistry For Malawi",
    series: "Chemistry For Malawi Series",
    volume: "Student's Book 1",
    frontImage: "/red front.jpg",
    backImage: "/red back.jpg",
    author: "Blessings G. Malimusi & Trust P. Chifunga",
    isbn: "ISBN 978-99960-099-5-2",
    subject: "Chemistry",
    level: "Secondary School",
    format: "Print",
    price: BOOK_PRICE_KWACHA,
  },
  {
    title: "Chemistry For Malawi",
    series: "Chemistry For Malawi Series",
    volume: "Student's Book 2",
    frontImage: "/blue front.jpg",
    backImage: "/blue back.jpg",
    author: "Trust P. Chifunga & Blessings G. Malimusi",
    isbn: "ISBN 978-99960-099-6-9",
    subject: "Chemistry",
    level: "Secondary School",
    format: "Print",
    price: BOOK_PRICE_KWACHA,
  },
  {
    title: "Chemistry For Malawi",
    series: "Chemistry For Malawi Series",
    volume: "Student's Book 3",
    frontImage: "/dark blue front.jpg",
    backImage: "/dark blue back.jpg",
    author: "Blessings G. Malimusi & Trust P. Chifunga",
    isbn: "ISBN 978-99960-099-7-6",
    subject: "Chemistry",
    level: "Secondary School",
    format: "Print",
    price: BOOK_PRICE_KWACHA,
  },
  {
    title: "Chemistry For Malawi",
    series: "Chemistry For Malawi Series",
    volume: "Student's Book 4",
    frontImage: "/brown front.jpg",
    backImage: "/brown back.jpg",
    author: "Trust P. Chifunga & Blessings G. Malimusi",
    isbn: "ISBN 978-99960-082-4-5",
    subject: "Chemistry",
    level: "Secondary School",
    format: "Print",
    price: BOOK_PRICE_KWACHA,
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Books | STEM Excellence Publishers" },
    {
      name: "description",
      content:
        "View the STEM Excellence Publishers book catalogue with front and back covers for each title.",
    },
  ];
}

export default function Books() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return bookCatalogue;
    }

    const normalizedQuery = query.replace(/[^a-z0-9]/g, "");

    return bookCatalogue.filter((book) => {
      const searchableValues = [
        book.title,
        book.series,
        book.volume,
        book.author,
        book.subject,
        book.level,
        book.format,
        book.isbn,
        formatKwacha(book.price),
        `${book.price}`,
      ]
        .join(" ")
        .toLowerCase();

      const normalizedSearchable = searchableValues.replace(/[^a-z0-9]/g, "");

      return searchableValues.includes(query) || normalizedSearchable.includes(normalizedQuery);
    });
  }, [searchQuery]);

  const resultsLabel = `${filteredBooks.length} ${filteredBooks.length === 1 ? "book" : "books"} found`;

  return (
    <SiteLayout compactFooterLinks={[{ to: "/for-authors", label: "Submit a manuscript" }]}>
      <div className="site-container modern-page">
        <PageIntro
          breadcrumb="Home / Books"
          title="Books Catalogue"
          lead="Browse our catalogue with paired front and back covers for each Chemistry For Malawi title."
        />

        <section className="modern-section">
          <div className="modern-section-head">
            <h2 className="modern-section-title">Books Available</h2>
          </div>
          <div className="books-search-panel">
            <label className="books-search-label" htmlFor="book-search">
              Search by title, ISBN, series, level, subject or format
            </label>
            <input
              id="book-search"
              className="books-search-input"
              type="search"
              placeholder=""
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <p className="books-search-meta">{resultsLabel}</p>
          </div>
          <div className="book-catalogue-grid">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <article key={book.volume} className="modern-card book-catalogue-card">
                  <p className="modern-kicker">{book.volume}</p>
                  <h3>{book.title}</h3>
                  <p className="book-meta-line">
                    {book.subject} | {book.level} | {book.format}
                  </p>
                  <div className="book-cover-pair">
                    <figure className="book-cover-frame">
                      <div className="book-cover-media">
                        <img
                          src={book.frontImage}
                          alt={`${book.title} ${book.volume} front cover`}
                          className="book-cover-image"
                        />
                      </div>
                      <figcaption></figcaption>
                    </figure>
                    <figure className="book-cover-frame">
                      <div className="book-cover-media">
                        <img
                          src={book.backImage}
                          alt={`${book.title} ${book.volume} back cover`}
                          className="book-cover-image"
                        />
                      </div>
                      <figcaption></figcaption>
                    </figure>
                  </div>
                  <p><b>Authors:</b> {book.author}</p>
                  <p className="book-price">Price: {formatKwacha(book.price)} </p>
                  <p className="modern-muted">{book.isbn}</p>
                </article>
              ))
            ) : (
              <article className="modern-card book-empty-state">
                <h3>No books found</h3>
                <p>Try searching with title, ISBN, volume, subject, format, or price.</p>
              </article>
            )}
          </div>
        </section>

      </div>
    </SiteLayout>
  );
}
