type PageIntroProps = {
  breadcrumb: string;
  title: string;
  lead: string | string[];
};

export function PageIntro({ breadcrumb, title, lead }: PageIntroProps) {
  const leadParagraphs = Array.isArray(lead) ? lead : [lead];

  return (
    <>
      <div className="breadcrumbs">{breadcrumb}</div>
      <section className="page-head">
        <h1>{title}</h1>
        {leadParagraphs.map((paragraph) => (
          <p key={paragraph} className="lead">
            {paragraph}
          </p>
        ))}
      </section>
    </>
  );
}
