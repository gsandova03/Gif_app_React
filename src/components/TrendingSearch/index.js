import React, { useEffect, useState, useRef, Suspense } from "react";

const TrendingSearch = React.lazy(() => import("./trendingSearch"));

export default function LazyTrending() {
  const [show, setShow] = useState([]);
  const elementRef = useRef();

  useEffect(function () {
    const onChange = (entry, observer) => {
      const element = entry[0];
      if (element.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  });

  return (
    <Suspense fallback={null}>
      <div ref={elementRef}>{show ? <TrendingSearch /> : null}</div>;
    </Suspense>
  );
}
