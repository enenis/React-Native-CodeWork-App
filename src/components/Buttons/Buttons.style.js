import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    buttons_container:{
        backgroundColor:"#bdbdbd",
        flexDirection:"row",
        padding:10,
        margin:10,
        borderRadius:10,
        
        
    },
    submit_button:{
        backgroundColor:"#FF8B8B",
        flex:1,
        padding:10,
        borderRadius:10,
        marginRight:10,
        marginVertical:10,
        flexDirection:"row",

    },
    favorite_button:{
        backgroundColor:"#FF8B8B",
        flex:1,
        padding:10,
        borderRadius:10,
        marginLeft:10,
        marginVertical:10,
        flexDirection:"row",
    },
    button:{
        color:"white",
        fontWeight:"bold",
        fontSize:16,
        marginLeft:10
    }
})