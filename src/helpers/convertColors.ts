export const rgbToHex = ({
  r,
  g,
  b,
}: {
  r: number;
  g: number;
  b: number;
}): string =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

export const hexToRgb = (hex: string): number[] => {
  const hexArray = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g);

  return (hexArray || []).map((x) => parseInt(x, 16));
};
