import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10)
  return (
    <View style={styles.container}>
        <Text style={styles.tittle}>
            Contador: { contador } </Text>

            <Fab 
            title="+1"           
            onPress={()=>setContador(contador + 1)}

            />

            <Fab 
            title="-1"
            position="bl"
            onPress={()=>setContador(contador - 1)}

            />

       

         {/* <TouchableOpacity style = {styles.fabLocationBL} onPress={()=>setContador(contador-1)}>
            <View style={styles.fab}>
                <Text style={styles.fabText}>
                    -1
                </Text>
            </View>
        </TouchableOpacity>       */}
        
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        justifyContent:'center'
    },

    tittle: {
        fontSize: 45,
        textAlign:"center",
        position:'relative',
        top: -15

    }    

})

