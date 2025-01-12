import {observer} from 'mobx-react';
import {useRootStore} from './components/useRootStore';
import {useEffect} from 'react';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return <HomeScreen />;
}

export default App;

export const HomeScreen = observer(() => {
  const {clickerStore} = useRootStore();

  useEffect(() => {
    clickerStore.getClickerObjectFromService();
  }, []);

  const handleOnClick = () => {
    clickerStore.actionClick();
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        {clickerStore.clickerModel && !clickerStore.isLoading ? (
          <Text>{clickerStore.clickerModel.count}</Text>
        ) : (
          <ActivityIndicator />
        )}
        <Button onPress={handleOnClick} title={'Click me'} />
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
