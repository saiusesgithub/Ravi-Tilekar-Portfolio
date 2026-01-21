import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setMetadata } from "@/utils/metadata";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    setMetadata({
      title: "Page Not Found | Ravi Tilekar",
      description: "The page you are looking for does not exist.",
      keywords: ["404", "not found", "Ravi Tilekar"],
      ogType: "website",
    });
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          Oops! Page not found
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
