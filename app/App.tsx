import React from 'react';
import {ActivityIndicator, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppColors} from './styles';
import NetInfo from '@react-native-community/netinfo';
import {SplashLoader} from '@components/SplashLoader';
import {NetworkError} from '@components/NetworkError';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from '@navigation/AppNavigator';
import {StoreProvider} from '@context/StoreContext';
import store from '@store/index';

const App = () => {
  const [connected, setConnected] = React.useState<boolean>(false);

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnected(state.isConnected || false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.rootView}>
        <StoreProvider store={store}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={AppColors.WHITE_GRAY}
          />
          {!connected ? <NetworkError /> : null}
          <NavigationContainer
            fallback={<ActivityIndicator color="blue" size="large" />}>
            <AppNavigator />
          </NavigationContainer>
          <SplashLoader />
        </StoreProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
});

export default App;
