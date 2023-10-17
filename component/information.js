import {StyleSheet, FlatList, Text } from "react-native";
import MeteoItem from './meteoitem'

export default function showWeather({data}) {

    return(
        <FlatList
            data={data}
            renderItem={({item})=> <MeteoItem item={item} />}
            style ={styles.flatlist}
        />
    )

}


const styles = StyleSheet.create({
    flatlist:{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
    }
})