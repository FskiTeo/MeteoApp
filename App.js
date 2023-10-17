import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Api from './component/api';
import Informations from './component/information';

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = new Api();
      const weatherData = await api.get_seven_days_meteo();
      setData(weatherData);
    };

    fetchData();
  }, []);

  console.log(data);

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
