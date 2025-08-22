import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="text-8xl font-heading text-primary/20">404</div>
          <h1 className="font-heading text-4xl text-primary mb-4">
            System Not Found
          </h1>
          <p className="text-xl text-text-light mb-8">
            This page seems to have wandered off into the emotional void.
          </p>
          <div className="space-y-4">
            <Link 
              to="/" 
              className="cta-button"
            >
              Return to Base System
            </Link>
            <p className="text-sm text-muted-foreground font-mono">
              Error logged for system optimization
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
