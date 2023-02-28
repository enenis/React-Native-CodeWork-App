import React from 'react'
import { View,Text,TouchableWithoutFeedback,TouchableOpacity,Alert } from 'react-native'
import styles from "./JobsCard.style"
import Maticons from "react-native-vector-icons/MaterialCommunityIcons"
import {useDispatch} from "react-redux"

function JobsCard({job,onPress,onFavorite,isFavorite,onDelete}) {

    const dispatch=useDispatch()
    const handleAdd = () => {
        dispatch({type: 'Add_Favorite', payload: {
            id:job.id, name: job.name, locations: job.locations, levels: job.levels, company: job.company, publication_date: job.publication_date}});
        Alert.alert("Add Favorite!", "Successfuly...");    
    };
    const removeJobItems = item => {
        dispatch({type: 'REMOVE_FAVOURITE', payload: {job: item}});
      };
  return (
    <View>
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.Container}>
                <View style={styles.LeftİnnerContainer}>
                    <Text style={styles.JobNameText}>{job.name}</Text>
                    <Text style={styles.CompanyNameText}>{job.company.name}</Text>
                    <View style={styles.locations_container}>
                    <Text style={styles.LocationNameText}>{job.locations[0].name}</Text>
                    </View>
                </View>
                <View style={styles.RightİnnerContainer}>
                    <Text style={styles.DateText}>{job.publication_date}</Text>
                    <Text style={styles.LevelNameText}>{job.levels[0].name}</Text>
                </View>
                <View style={styles.footer_container}>
                {
                    isFavorite?<TouchableOpacity onPress={onDelete} >
                    <View style={styles.footer} isFavorite={false}>
                    <Maticons name="account" size={30} color="gray"/>
                    <Text  style={styles.footer_text}>Remove</Text>
                    </View>
                    </TouchableOpacity>

                    :<TouchableOpacity onPress={handleAdd} >
                    <View style={styles.footer} isFavorite={false}>
                    <Maticons name="account" size={30} color="gray"/>
                    <Text  style={styles.footer_text}>Add Favorite</Text>
                    </View>
    
                    </TouchableOpacity>
                }
                {/* <TouchableOpacity onPress={handleAdd} >
                <View style={styles.footer} isFavorite={false}>
                <Maticons name="account" size={30} color="gray"/>
                <Text  style={styles.footer_text}>Remove</Text>
                
                <Text  style={styles.footer_text}>Add Favorite</Text>
                   
                
                </View>

                </TouchableOpacity> */}
                <TouchableOpacity onPress={onPress}>
                <View style={styles.footer}>
                <Maticons name="key" size={30} color="gray"/>
                    <Text style={styles.footer_text}>Go Detail!</Text>
                </View>
                </TouchableOpacity>
                </View>
            </View> 
        </TouchableWithoutFeedback>
    </View>
  )
}

export default JobsCard