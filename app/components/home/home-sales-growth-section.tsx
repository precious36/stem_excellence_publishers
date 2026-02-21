import { useEffect, useRef, useState } from "react";

const SALES_TARGET = 225;

export function HomeSalesGrowthSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [displaySales, setDisplaySales] = useState(0);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    if (!sectionNode) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        setIsInView(isVisible);
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(sectionNode);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      setDisplaySales(0);
      return;
    }

    setDisplaySales(0);
    let animationFrameId = 0;
    const durationMs = 1700;
    const start = performance.now();

    const updateCounter = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / durationMs, 1);
      setDisplaySales(Math.round(progress * SALES_TARGET));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="home-sales-growth" aria-labelledby="sales-growth-title">
      <div className="site-container">
        <div className="home-sales-head">
          <div className="home-sales-counter-wrap">
            <h2 id="sales-growth-title">Books sales so far</h2>
            <div className="home-sales-milestone" aria-live="polite">
              <strong>{displaySales}+</strong>
              <span>Books sold</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
