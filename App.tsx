import { ApplicationProvider } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as eva from '@eva-design/eva';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import { store } from './redux/store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [fontLoaded] = useFonts({
    //NanumGothic: require('./assets/fonts/NanumBarunGothic.ttf'),
    //NanumGothicB: require('./assets/fonts/NanumBarunGothicBold.ttf'),
    //NanumSquare: require('./assets/fonts/NanumSquareR.ttf'),
    NanumSquareB: require('./assets/fonts/NanumSquareB.ttf'),
    //SeoulNamsanM: require('./assets/fonts/SeoulNamsanM.ttf'),
    //SeoulNamsanB: require('./assets/fonts/SeoulNamsanB.ttf'),
    //SeoulNamsan: require('./assets/fonts/SeoulNamsanvert.ttf'),
  });

  if (!fontLoaded) {
    return null
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ApplicationProvider>
      </Provider>
    );
  }
}
