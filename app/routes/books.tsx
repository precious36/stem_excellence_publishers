import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/books";

const books = [
  { title: "Book Title 1", category: "Engineering", level: "Undergraduate", status: "In preparation" },
  {
    title: "Book Title 2",
    category: "Computing",
    level: "Beginner-Intermediate",
    status: "Planned",
  },
  { title: "Book Title 3", category: "Outreach", level: "General", status: "Published" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Books | STEM Excellence Publishers" },
    {
      name: "description",
      content: "Browse the STEM Excellence Publishers catalogue and planned releases.",
    },
  ];
}

export default function Books() {
  return (
    <SiteLayout compactFooterLinks={[{ to: "/for-authors", label: "Submit a manuscript" }]}>
      <div className="site-container">
        <PageIntro
          breadcrumb="Home / Books"
          title="Books & Catalogue"
          lead="Placeholder catalogue for now. Add your real titles later."
        />

        <section className="section">
          <table className="data-table" aria-label="Books table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Level</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.title}>
                  <td>{book.title}</td>
                  <td>{book.category}</td>
                  <td>{book.level}</td>
                  <td>{book.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="notice-box">
            Later we can convert each row into a dedicated book page with ISBN, abstract, and
            download or buy links.
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
