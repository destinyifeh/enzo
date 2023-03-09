import React from "react";
import { StyleSheet, Text, View } from "react-native";


 const Navigation = () =>{
    return(
        <View style={styles.navContainer}>
              <Text style={styles.text}>Home</Text> 
              <Text style={styles.text}>About</Text> 
              <Text style={styles.text}>Contact</Text> 

        </View>
    )
}



const styles = StyleSheet.create({
    navContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:20,
        backgroundColor:"ghostwhite",
        padding:10,
        borderRadius:15,
        width:"50%",
        alignSelf:"center"
    },
    text:{
        
        color:"blue",
        
    },
   
})


export default Navigation;