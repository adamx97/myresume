import { useState, useEffect } from 'react';

export default function useMainContainerDimensions() {

  const hasWindow = typeof window !== 'undefined';

  function getMainContainerDimensions() {

    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    console.log("Window Width: " + width + " Window Height: " + height);
    return {
      width,
      height,
    };
  }

  const [mainContainerDimensions, setMainContainerDimensions] = useState(getMainContainerDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setMainContainerDimensions(getMainContainerDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow, getMainContainerDimensions]);

  return useMainContainerDimensions;
}