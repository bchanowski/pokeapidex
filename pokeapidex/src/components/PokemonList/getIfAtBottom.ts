export const isAtBottom = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;
  const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
  const threshold = 50;
  const atBottom = distanceFromBottom < threshold;
  return atBottom;
};
