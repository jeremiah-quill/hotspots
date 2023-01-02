import { useState, useEffect } from "react";

// TODO: use percentages instead of pixels? give option of using either?
// TODO: why is this a little janky? If I drag too fast, the element lags behind and eventually stops working
export function useDragger(elementRef, containerRef) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = elementRef.current;

    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    const mouseDownHandler = (event) => {
      if (event.target === element) {
        isDragging = true;
      }
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
    };

    const mouseMoveHandler = (event) => {
      if (isDragging) {
        event.preventDefault();
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setCoords({ x: currentX, y: currentY });
      }
    };

    const mouseUpHandler = (event) => {
      isDragging = false;
    };

    element.addEventListener("mousedown", mouseDownHandler);
    element.addEventListener("mousemove", mouseMoveHandler);
    element.addEventListener("mouseup", mouseUpHandler);

    return () => {
      element.removeEventListener("mousedown", mouseDownHandler);
      element.removeEventListener("mousemove", mouseMoveHandler);
      element.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [elementRef, containerRef]);

  return coords;
}
