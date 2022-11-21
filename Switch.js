import React, { useState } from 'react';
import {
    LayoutAnimation,
    Platform,
    StyleSheet,
    TouchableOpacity,
    UIManager,
    View
} from 'react-native';
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const activeColor = 'green';
const inActiveColor = 'grey';

export const Home = () => {
const [toggleActive, setToggle] = useState(false);
const [toggleActive2, setToggle2] = useState(false);
return (
    
<View style={styles.container}>
    <TouchableOpacity
        style={[
            styles.toggleContainer,
            { borderColor: toggleActive ? 'green' : 'grey',
              borderWidth:2 
            },
        ]}
        onPress={() => {
            LayoutAnimation.easeInEaseOut();
            setToggle(!toggleActive)  
        }}
        activeOpacity={1}>
        <View
            style={[
                styles.toggleBtn,
                toggleActive
                    ? { backgroundColor: 'green', alignSelf: 'flex-end' }
                    : { backgroundColor: 'grey' },
            ]}
        />
    </TouchableOpacity>
    <TouchableOpacity
        style={[
            styles.toggleContainer,
            { borderColor: toggleActive2 ? 'green' : 'grey',
              borderWidth:2 
            },
        ]}
        onPress={() => {
            LayoutAnimation.easeInEaseOut();
            setToggle(!toggleActive2)  
        }}
        activeOpacity={1}>
        <View
            style={[
                styles.toggleBtn,
                toggleActive2
                    ? { backgroundColor: 'green', alignSelf: 'flex-end' }
                    : { backgroundColor: 'grey' },
            ]}
        />
    </TouchableOpacity>
</View>
    
  )
}


const styles = StyleSheet.create({
    container: { 
        flex:1,alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor:'#FCFFD6'},
    status: {
        width: 100,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    toggleContainer: {
        height: 60,
        width: 120,
        borderRadius: 40,
        borderWidth: 0.5,
        overflow: 'hidden',
        marginTop:70
    },
    toggleBtn: { 
        height: '100%', 
        width: '50%', 
        borderRadius:60},
})
