import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Api from './component/api';
import Informations from './component/information';

export default function App() {
  const api = new Api();
  const data = api.get_seven_days_meteo();
  return (
    <View style={styles.container}>
      <Informations data={data}/> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
