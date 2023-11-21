import { IoSearchCircle } from "react-icons/io5";
import { useCallback, useEffect, useState, useRef } from "react";
import { useAppDispatch } from "@/hooks";
import { setPokemonDataToInitial } from "@/slices/pokemonDataSlice";
import { setCounterReset } from "@/slices/counterSlice";
import { setSearchingValue } from "@/slices/isSearchingSlice";

const NavbarSearchInput = () => {
  const dispatch = useAppDispatch();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const inputValueRef = useRef<string>("");
  const delay = 1000;
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);
  const handleSearchChange = useCallback(() => {
    const latestInputValue = inputValueRef.current;
    dispatch(setPokemonDataToInitial());
    dispatch(setCounterReset());
    dispatch(setSearchingValue(latestInputValue));
  }, [dispatch]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    inputValueRef.current = newValue;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      handleSearchChange();
    }, delay);
    setTimeoutId(newTimeoutId);
  };

  return (
    <label htmlFor="search-input" className="search-input-label">
      <input
        name="search-input"
        className="navbar-search-input"
        type="text"
        placeholder="Type a pokemon name..."
        onChange={handleChange}
      />
      <IoSearchCircle className="search-input-icon" />
    </label>
  );
};

export default NavbarSearchInput;
