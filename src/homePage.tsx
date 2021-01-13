import React, { useState, useEffect,  } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'
import Icon from '../assets/play.png'
import styles from './styles';
import LottieView from "lottie-react-native";
import * as Animatable from 'react-native-animatable';


const homePage: React.FC = () => {

 
    const { navigate } = useNavigation();


    
    

    function handleNavigationToGiveClassesPage(){
        navigate('Game')
    }

    function handleNavigationToStudyPages(){
        navigate('Study')
    }

    

    return (
        
        
        

        <View style={styles.container}>
            
            <Animatable.View 
                animation='zoomIn' 
                duration={4000} 
                useNativeDriver={true} 
                style={{
                    alignItems:'center',
                    justifyContent: 'center'
                }}
            >

                    <Text
                    style={{
                        fontFamily: 'Poppins_400Regular',
                        paddingBottom:50,
                        textAlign: 'center',
                        fontSize: 40,
                        color: '#ffff'
                    }}
                    >Snake Game

                </Text>

                <LottieView 
                    style={{
                            width: 1000, 
                            height: 400,
                        
            
                        }} 
                    source={require('../assets/lf30_editor_0oxritff (2).json')}
                    autoPlay
                    loop
                />
            </Animatable.View>
            <View style={styles.buttonsContainer}>
                
                
                

                <RectButton
                    onPress={handleNavigationToGiveClassesPage}
                    style={[styles.button, styles.buttonsSecondary]}
                >
                    <Text 
                        style={{
                           
                            textAlign:'center',
                            fontFamily:'Poppins_400Regular',
                            fontSize:20
                    }}>JOGAR
                    
                    </Text>
                  
                </RectButton>
                    
                    
                
            </View>

          
        </View>
    )
};

export default homePage;