import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// About page now redirects to Home (all content merged into /)
export const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);
  return null;
};
