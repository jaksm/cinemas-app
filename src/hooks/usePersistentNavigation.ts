import {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import { NavigationState } from '@react-navigation/native';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

export function usePersistentNavigation() {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  function persistNavigationState(state: NavigationState | undefined) {
    if (state) {
      return AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
    }
  }

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        if (savedStateString) {
          const state = JSON.parse(savedStateString);
          setInitialState(state);
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  return {
    initialState,
    isReady,
    persistNavigationState,
  };
}
