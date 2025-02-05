import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function generatePriceRanges(minPrice, maxPrice, step) {
  const ranges = [];
  let currentMin = minPrice;

  // Include the range for all items
  ranges.push([0, maxPrice]);

  // Generate price ranges using the step size
  while (currentMin < maxPrice) {
    let currentMax = Math.min(currentMin + step, maxPrice);
    ranges.push([currentMin, currentMax]);
    currentMin = currentMax;
  }

  return ranges;
}

export function truncateParagraph(text, maxLength) {
  if (text?.length <= maxLength) {
    return text;
  }
  return text?.slice(0, maxLength) + "...";
}
