import React, { useState, useEffect } from "react";
import { Log } from "../middleware/logger";

/**
 * State management utilities with logging
 */

// Simple state store
let stateListeners = [];

export const createStore = (initialState) => {
  let state = initialState;

  const getState = () => {
    Log(
      "frontend",
      "debug",
      "state",
      "State retrieved"
    );
    return state;
  };

  const setState = (newState) => {
    const oldState = state;
    state = typeof newState === "function" ? newState(state) : newState;

    Log(
      "frontend",
      "info",
      "state",
      `State updated`
    );

    stateListeners.forEach((listener) => listener(state, oldState));
  };

  const subscribe = (listener) => {
    stateListeners.push(listener);

    Log(
      "frontend",
      "debug",
      "state",
      "New state listener subscribed"
    );

    return () => {
      stateListeners = stateListeners.filter((l) => l !== listener);
    };
  };

  return { getState, setState, subscribe };
};

/**
 * Custom hook for using store state
 */
export const useStore = (store, selector) => {
  const [state, setState] = useState(() => selector(store.getState()));

  useEffect(() => {
    const unsubscribe = store.subscribe((newState) => {
      setState(selector(newState));
    });

    return unsubscribe;
  }, [store, selector]);

  return state;
};
