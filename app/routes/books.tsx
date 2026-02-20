import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/books";

const bookCatalogue = [
  {
    title: "Chemistry For Malawi",
    volume: "Student's Book 1",
    frontImage: "/red front.jpg",
    backImage: "/red back.jpg",
    isbn: "ISBN 978-99960-099-5-2",
  },
  {
    title: "Chemistry For Malawi",
    volume: "Student's Book 2",
    frontImage: "/blue front.jpg",
    backImage: "/blue back.jpg",
    isbn: "ISBN 978-99960-099-6-9",
  },
  {
    title: "Chemistry For Malawi",
    volume: "Student's Book 3",
    frontImage: "/dark blue front.jpg",
    backImage: "/dark blue back.jpg",
    isbn: "ISBN 978-99960-099-7-6",
  },
  {
    title: "Chemistry For Malawi",
    volume: "Student's Book 4",
    frontImage: "/brown front.jpg",
    backImage: "/brown back.jpg",
    isbn: "ISBN 978-99960-082-4-5",
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
            <h2 className="modern-section-title">Chemistry For Malawi Series</h2>
          </div>
          <div className="book-catalogue-grid">
            {bookCatalogue.map((book) => (
              <article key={book.volume} className="modern-card book-catalogue-card">
                <p className="modern-kicker">{book.volume}</p>
                <h3>{book.title}</h3>
                <div className="book-cover-pair">
                  <figure className="book-cover-frame">
                    <img
                      src={book.frontImage}
                      alt={`${book.title} ${book.volume} front cover`}
                      className="book-cover-image"
                    />
                    <figcaption>Front Cover</figcaption>
                  </figure>
                  <figure className="book-cover-frame">
                    <img
                      src={book.backImage}
                      alt={`${book.title} ${book.volume} back cover`}
                      className="book-cover-image"
                    />
                    <figcaption>Back Cover</figcaption>
                  </figure>
                </div>
                <p className="modern-muted">{book.isbn}</p>
              </article>
            ))}
          </div>
        </section>

      </div>
    </SiteLayout>
  );
}
