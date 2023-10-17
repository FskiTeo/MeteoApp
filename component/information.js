import { useState, useEffect } from "react";
import Api from './api.js';
import { FlatList } from "react-native";

export default function showWeather(data) {

    return(
        <FlatList
            data={data}
            renderItem={({item})=> <Text>{item}</Text>}
        />
    )

}