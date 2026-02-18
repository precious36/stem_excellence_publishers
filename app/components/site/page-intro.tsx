type PageIntroProps = {
  breadcrumb: string;
  title: string;
  lead: string;
};

export function PageIntro({ breadcrumb, title, lead }: PageIntroProps) {
  return (
    <>
      <div className="breadcrumbs">{breadcrumb}</div>
      <section className="page-head">
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </section>
    </>
  );
}
