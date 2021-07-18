import { useEffect, useState } from "react";
import backTopLogo from '../assets/images/arrow.png'

import '../styles/scrollToTopButton.scss'

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleVisible() {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleToggleVisible)
  }, [])

return (
    <div className="scroll-to-top">
      {isVisible &&
        <div onClick={handleScrollToTop}>
          <img src={backTopLogo} alt='Go to top' data-aos="fade-in" />
        </div>}
    </div>
  );
}