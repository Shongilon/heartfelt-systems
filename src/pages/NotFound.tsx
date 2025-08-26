import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="space-y-8">
          <div className="text-8xl font-bold text-primary/20">404</div>
          <h1 className="text-4xl text-foreground mb-4">
            System Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            This page seems to have wandered off into the emotional void.
          </p>
          <div className="space-y-4">
            <Link 
              to="/" 
              className="cta-button"
            >
              Return to Base System
            </Link>
            <p className="text-sm text-muted-foreground">
              Error logged for system optimization
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
