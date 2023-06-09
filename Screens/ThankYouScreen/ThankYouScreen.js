
import React from "react";
import { StyleSheet, View, Text, Dimensions, SafeAreaView, KeyboardAvoidingView, Pressable, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';

const { height } = Dimensions.get("window");


function ThankYouScreen() {


  

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView contentContainerStyle={{height: "100%",flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Image
                    style={{
                        width: 300,
                        height: 200
                    }}
                   
                    source={require("../../media_assets/hertfordshire.png")} />
              
              <Text style={{fontWeight: "bold", fontSize: 35}}>Thank You For Registering With Us.</Text>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
        button: {
          alignItems: 'center',
          backgroundColor: 'rgb(93, 95, 222)',
          borderRadius: 8,
          height: 48,
          justifyContent: 'center',
        },
        buttonTitle: {
          color: '#FFFFFF',
          fontSize: 17,
          fontWeight: '600',
          lineHeight: 22,
        },
        content: {
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 16,
          paddingVertical: 32,
        },
        forgotPasswordContainer: {
          alignItems: 'flex-end',
        },
        form: {
          alignItems: 'center',
          backgroundColor: 'rgb(58, 58, 60)',
          borderRadius: 8,
          flexDirection: 'row',
          height: 48,
          paddingHorizontal: 16,
        },
        label: {
          color: 'rgba(235, 235, 245, 0.6)',
          fontSize: 15,
          fontWeight: '400',
          lineHeight: 20,
          width: 80,
        },
        root: {
          backgroundColor: '#000000',
          flex: 1,
        },
        safeAreaView: {
          flex: 1,
        },
        subtitle: {
          color: 'rgba(235, 235, 245, 0.6)',
          fontSize: 17,
          fontWeight: '400',
          lineHeight: 22,
        },
        textButton: {
          color: '#FFFFFF',
          fontSize: 15,
          fontWeight: '400',
          lineHeight: 20,
        },
        forgetPassword:{
          color: "black",
          marginVertical: 10
        },
        textInput: {
          width: "100%",
          color: '#FFFFFF',
          flex: 1,

        },
        title: {
          color: 'black',
          fontSize: 28,
          fontWeight: '700',
          lineHeight: 34,
        }
        
});

export default ThankYouScreen;
