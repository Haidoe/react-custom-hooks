import { useState } from "react";

export default function useInput(value) {
  const [state, setState] = useState(value);

  const handleState = event => {
    setState(event.target.value);
  };

  const resetState = () => {
    setState(value);
  };

  return [state, handleState, resetState];
}
