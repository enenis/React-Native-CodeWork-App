import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./Buttons.style"

export default function Buttons({onFavorite,onPress}) {
  return (
    <View style={styles.buttons_container}>
        <TouchableOpacity style={styles.submit_button} onPress={onPress}>
            <Icon name="chat" size={22} color="white"/>
            <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.favorite_button} onPress={onFavorite}>
        <Icon name="bookmark" size={22} color="white"/>
            <Text style={styles.button}>Favorite</Text>
        </TouchableOpacity>
    </View>
  )
}
