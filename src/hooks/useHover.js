import { useState, useEffect, useRef } from 'react';

export default function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  const hoverRef = useRef(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);
  // const handleClick = () => setIsHovered(false);

  useEffect(
    () => {
      const node = hoverRef.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
        // node.addEventListener('onclick', handleClick);
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
          // node.removeEventListener('onclick', handleClick);
        };
      }
    },
    [] // Recall only if ref changes
  );

  return [hoverRef, isHovered];
}
