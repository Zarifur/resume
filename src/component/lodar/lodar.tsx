import { useEffect } from "react";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const PageLoader = () => {
  useEffect(() => {
    nprogress.start();

    // Simulate loading delay; replace with real async calls if needed
    const timer = setTimeout(() => {
      nprogress.done();
    }, 1000); // 1 second fake delay

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default PageLoader;
