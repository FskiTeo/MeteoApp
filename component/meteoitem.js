import React from 'react' 
import { StyleSheet, View, Text } from 'react-native'

export default function MeteoItem(item) {

    console.log('coucou')
    console.log(item)

    const date = new Date(item.item.datetime)

    const options = { weekday: 'long' };
    const nomJour = date.toLocaleDateString('fr-FR', options);

    return(
        <View style={styles.main_container}> 
            <Text style={styles.title_text}>{nomJour}</Text>
            <Text style={styles.title_text}>Temperature max : {item.item.tmax}</Text>
            <Text style={styles.title_text}>Temperature min : {item.item.tmin}</Text>
            <Text style={styles.title_text}>Weather : {item.item.weather}</Text>
        </View>
    )
}

const styles = StyleSheet.create({ 
    main_container: { 
        height: 190 
    }, 
    title_text: { 
        fontSize:35 
    } 
})