import React from "react";
import { Text, View,Image, Pressable,StyleSheet} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';



export default props => {

    return(
        <View style={style.body}>
            <Text style={style.text}>GAMEON</Text>

            <Pressable style={style.img}>
                <Image source={require('../images/homeLogo.png')} style={style.imgFt}/>
            </Pressable>

            <Pressable style={style.button} onPress={()=> props.navigation.navigate('Login')}>
                <Text style={style.textBtn}>Let´s Begin</Text>
                <Icon name="arrow-forward-circle-sharp" size={25} color="#FFF"/>
            </Pressable>
        </View>
    )
}


const style = StyleSheet.create(
    {   
        body:{
            backgroundColor:"#fff",
            flexGrow:1
        },
        text:{
            fontSize:40,
            fontWeight:"bold",
            color: "black",
            fontFamily:"Pixelify Sans",
            textAlign:"center",
            justifyContent:"center",
            alignItems:"center",
            marginTop: 45
        },
        img:{
            alignItems:"center",
            marginTop: 200,
        },
        imgFt:{
            width:300,
            height:250,
            transform: [{skewY: '-15deg'}],
        },
        button:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginTop: 150,
            marginLeft:45,
            paddingLeft:20,
            paddingRight:20,
            width:350,
            height:50,
            borderRadius:5,
            backgroundColor:"#AE40B1",
        },
        textBtn:{
            color:"#FFF",
            fontSize:15,
            fontStyle: 'italic',
            fontWeight:"bold",
            
        }

    }
)