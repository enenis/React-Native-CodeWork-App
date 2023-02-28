import React from 'react'
import { View,Text,FlatList,Alert } from 'react-native'
import Config from 'react-native-config'
import JobsCard from '../../components/JobsCard'
import useFetch from '../../hooks/useFetch/useFetch'
import {useDispatch} from "react-redux"
import Lottie from 'lottie-react-native';

function Jobs({navigation}) {
    const{data,error,loading}=useFetch('https://www.themuse.com/api/public/jobs?page=1')

    if (loading) {
        return <Lottie source={require('../../assets/loading.json')} autoPlay  />
    }
    
    if (error) {
        return <Lottie source={require('../../assets/error.json')} autoPlay  />
    }

    const goToDetail=id=>{
        navigation.navigate("DetailJobs",{id})
    }
    const dispatch=useDispatch()
    const handleAdd = () => {
        dispatch({type: 'Add_Favorite', payload: {
            id:data.id, name: data.name, locations: data.locations, levels: data.levels, company: data.company, publication_date: data.publication_date}});
        Alert.alert("Add Favorite!", "Favorilere eklendi.");    
    };

    const renderShownJobs=({item})=>(
        <JobsCard job={item} onFavorite={handleAdd} onPress={()=>goToDetail(item.id)}  isFavorite={false} />
    )
  return <FlatList style={{backgroundColor:"#bdbdbd"}} data={data.results} renderItem={renderShownJobs} />
}

export default Jobs