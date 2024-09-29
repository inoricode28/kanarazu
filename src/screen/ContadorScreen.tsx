import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10)
  return (
    <View style={styles.container}>
        <Text style={styles.tittle}>
            Contador: { contador } </Text>

        <TouchableOpacity style = {styles.fabLocationBL} onPress={()=>setContador(contador+1)}>
            <View style={styles.fab}>
                <Text style={styles.fabText}>
                    +1
                </Text>
            </View>
        </TouchableOpacity>       
        
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        justifyContent:'center'
    },

    tittle: {
        fontSize: 45,
        textAlign:"center",
        position:'relative',
        top: -15

    },

    fabLocationBL:{

    },

    fab:{
        backgroundColor:'#5856D6',
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:'center'

    },
    fabText:{
        color:'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf:'center'

    }



    


})

