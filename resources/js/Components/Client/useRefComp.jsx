import * as React from 'react';

const useRefComp = () => {
  const ref = React.useRef(null);

  const scrollToRef = () => {
    const appBarHeight = 120; // Fixed height of the AppBar
    if (ref.current) {
      const componentPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: componentPosition - appBarHeight,
        behavior: "smooth",
      });
    }
  };

  return { ref, scrollToRef };
};

export default useRefComp;
