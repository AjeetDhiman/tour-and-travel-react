import { useEffect } from "react";

const PreloadImage = ({ href, type = "image/jpeg" }) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = href;
    link.type = type;
    link.setAttribute("fetchpriority", "high");

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [href, type]);

  return null;
};

export default PreloadImage;
