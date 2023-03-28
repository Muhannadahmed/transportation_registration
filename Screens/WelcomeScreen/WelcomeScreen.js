import React from "react";
import { StyleSheet, View, Text, Dimensions, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/Colors";
//import * as hertzImage from ;
import { useNavigation } from '@react-navigation/native';


const { height } = Dimensions.get("window");


function WelcomeScreen() {

    const navigation = useNavigation()

    const myOnPress = () => {
        return navigation.navigate('Register'); 
    };

    const signInPress = () =>{
        return navigation.navigate("SignIn")
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView contentContainerStyle={{justifyContent: "center", alignItems: "center"}}>
                <Image
                    style={{
                        width: 300,
                        height: 200
                    }}
                   
                    source={require("../../media_assets/hertfordshire.png")} />
                <View
                    style={{
                        paddingHorizontal : 10 * 4,
                        paddingTop : 10 * 4
                    }}>
                    <Text
                    style={{
                        fontSize: 35,
                        fontWeight: "bold",
                        color:Colors.primary,
                        fontFamily: "Arial",
                        textAlign: "center"

                    }}
                    >
                    Transportation Registration </Text>
                        <Text
                    style={{
                        fontSize: FontSize.small,
                        color:Colors.text,
                        fontFamily: "Arial",
                        textAlign: "center",
                        marginTop: 10 * 2,


                    }}
                    >
                        Signin with your Gaf Email
                    </Text>

                </View>
                <View style={{
                    paddingHorizontal: 10 * 2,
                    paddingTop: 10 * 6,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"

                }}>
                    <TouchableOpacity onPress={signInPress}
                        style={{
                            backgroundColor: Colors.primary,
                            paddingVertical: 10 * 1.5,
                            paddingHorizontal: 10 * 2,
                            marginBottom: 10,
                            width: "48%",
                            borderRadius: 10,
                    }}>

                        <Text style={{
                            width: 150,
                            fontFamily: "Arial",
                            color: Colors.onPrimary,
                            fontSize: FontSize.large,
                            textAlign:"center",
                        }}>
                           Login as Admin
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={myOnPress}
                        style={{
                            backgroundColor: Colors.primary,
                            paddingVertical: 10 * 1.5,
                            paddingHorizontal: 10 * 2,
                            width: "48%",
                            borderRadius: 10,
                        }}
                        
                        >
                        <Text style={{
                            width: 150,
                            fontFamily: "Arial",
                            color: Colors.onPrimary,
                            fontSize: FontSize.large,
                            textAlign:"center",
                        }}>
                           Register as Student
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    
});

export default WelcomeScreen;
