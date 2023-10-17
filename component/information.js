import {StyleSheet, FlatList, Text } from "react-native";

export default function showWeather({data}) {

    return(
        <FlatList
            data={data}
            renderItem={({item})=> <Text>{item}</Text>}
            styles ={styles.flatlist}
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