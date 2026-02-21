import { useState } from "react";

const successStories = [
  {
    id: "mzuzu-teachers",
    title: "Mzuzu Teacher Network",
    summary:
      "A cluster of secondary school teachers used the Chemistry For Malawi series for structured weekly revision support.",
    need: "Teachers needed a consistent, syllabus-aligned resource for large mixed-ability classes.",
    action:
      "Departments adopted guided chapter schedules and shared practical examples from local classroom contexts.",
    outcome:
      "More students completed revision plans before examinations, and class engagement increased during science sessions.",
    quote:
      "The books gave us one reliable path for lesson planning and student revision.",
  },
  {
    id: "blantyre-study-club",
    title: "Blantyre Community Study Club",
    summary:
      "A youth STEM club integrated the books into weekend sessions for students preparing for national exams.",
    need: "Learners needed affordable, easy-to-follow content outside regular class hours.",
    action:
      "Mentors used each unit for short concept drills, worked examples, and peer explanations.",
    outcome:
      "The club reported stronger confidence in calculations and improved completion of chemistry practice tasks.",
    quote:
      "Students now explain concepts to each other with confidence, not just memorize answers.",
  },
  {
    id: "lilongwe-college",
    title: "Lilongwe Pre-University Bridging Support",
    summary:
      "An academic support program used the series to help first-year entrants close chemistry knowledge gaps.",
    need: "Bridging learners needed clear foundations before starting technical diploma modules.",
    action:
      "Facilitators mapped weekly topics to book chapters and ran targeted revision checkpoints.",
    outcome:
      "Students improved early-term quiz performance and reached stronger readiness for laboratory modules.",
    quote:
      "The structure helped us move from weak fundamentals to practical readiness.",
  },
];

export function HomeSuccessStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalStories = successStories.length;

  const showPreviousStory = () => {
    setActiveIndex((current) => (current - 1 + totalStories) % totalStories);
  };

  const showNextStory = () => {
    setActiveIndex((current) => (current + 1) % totalStories);
  };

  return (
    <section className="home-success-stories" aria-labelledby="success-stories-title">
      <div className="site-container">
        <div className="home-stories-header">
          <div>
            <h2 id="success-stories-title">Success Stories</h2>
          </div>
        </div>

        <div className="home-stories-slider">
          <button
            type="button"
            className="home-stories-arrow"
            aria-label="Show previous success story"
            onClick={showPreviousStory}
          >
            <span aria-hidden="true">&#8592;</span>
          </button>

          <div className="home-stories-viewport" aria-live="polite">
            <div
              className="home-stories-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {successStories.map((story) => (
                <article key={story.id} className="home-story-slide">
                  <div className="home-story-card">
                    <div>
                      <h3>{story.title}</h3>
                      <p className="home-story-summary">{story.summary}</p>
                      <ul className="home-story-list">
                        <li>{story.need}</li>
                        <li>{story.action}</li>
                        <li>{story.outcome}</li>
                      </ul>
                    </div>
                    <aside className="home-story-quote-box">
                      <p className="home-story-quote">{story.quote}</p>
                      <p className="home-story-quote-meta">
                        STEM Excellence Publishers impact story
                      </p>
                    </aside>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="home-stories-arrow"
            aria-label="Show next success story"
            onClick={showNextStory}
          >
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>

        <div className="home-stories-dots" aria-label="Select success story">
          {successStories.map((story, index) => (
            <button
              key={story.id}
              type="button"
              className={`home-stories-dot ${index === activeIndex ? "is-active" : ""}`}
              aria-label={`Show success story ${index + 1}: ${story.title}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
