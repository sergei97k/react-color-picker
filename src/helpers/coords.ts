export const getElemCoords = (
  node: HTMLElement
): { left: number; top: number } => {
  const parentNode = node.parentNode as HTMLInputElement;
  // If click happened on icon DOM element - it should get the rect from parent button
  const rect =
    parentNode && parentNode.type === "submit"
      ? parentNode.getBoundingClientRect()
      : node.getBoundingClientRect();

  return {
    left: rect.x + rect.width / 2,
    top: rect.y + window.scrollY,
  };
};
