import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"#FFF",
        margin:5,
        padding:1,
        borderRadius:12
    },
    LeftİnnerContainer:{
        flex:1,
        flexDirection:"column",
        margin:4
    },

    JobNameText:{
        color:"black",
        fontWeight:"bold",
        fontSize:17
    },
    CompanyNameText:{
        fontWeight:"bold",
        marginVertical:4,
    },
    locations_container:{
        backgroundColor: '#FF8B8B',
        borderRadius: 50,
        padding: 4,
        textAlign: 'center',
        width:"50%",
        
        
    },
    LocationNameText:{
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign:"center"
    },
    RightİnnerContainer:{
        
    },
    LevelNameText:{
        alignSelf:"flex-end",
        marginBottom:10,
        color: '#FF8B8B',
        fontWeight:"bold"
    },
    footer_container:{
        flexDirection:"row",
        justifyContent:"space-between",
        // margin:4
    },
    footer:{
        flex:1,
        backgroundColor:"#bdbdbd",
        width: Dimensions.get("window").width/2.5,
        height:30,
        flexDirection:"row",
        borderRadius:20,
        justifyContent:"center",
        margin:4

    },
    footer_text:{
        textAlignVertical:"center",
        marginLeft:2,
        fontWeight:"bold",
        color:"white"
    }
})