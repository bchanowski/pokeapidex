export const getPokemonCounterValue = () => {
  const screenWidth = window.screen.width;
  if (
    (screenWidth < 1625 && screenWidth > 1305) ||
    (screenWidth < 985 && screenWidth > 665)
  )
    return 12;
  else return 15;
};
