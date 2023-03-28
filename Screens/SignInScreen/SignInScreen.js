import React from "react";
import { StyleSheet, View, Text, Dimensions, SafeAreaView, KeyboardAvoidingView, Pressable, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/Colors";
import { useNavigation } from "@react-navigation/native";
//import * as hertzImage from ;

const { height } = Dimensions.get("window");


function SignInScreen() {
    const navigation = useNavigation()

    const signInPress = () =>{
        return navigation.navigate("SignIn")
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView contentContainerStyle={{justifyContent: "center", alignItems: "center"}}>
 
                <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.content}
                >
                <Text style={styles.title}>Welcome please sign in</Text>


                <Text style={styles.subtitle}>Sign in to your account</Text>


                <Pressable style={{width: 300}}>
                    <View style={styles.form}>
                    <Text style={styles.label}>Email</Text>

                    <TextInput
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        style={styles.textInput}
                        textContentType="username"
                        
                    />
                    </View>
                </Pressable>


                <Pressable style={{width: 300, marginTop: 10}}>
                    <View style={styles.form}>
                    <Text style={styles.label}>Password</Text>

                    <TextInput
                        autoCapitalize="none"
                        autoCompleteType="password"
                        autoCorrect={false}
                        returnKeyType="done"
                        secureTextEntry
                        style={styles.textInput}
                        textContentType="password"
                    />
                    </View>
                </Pressable>


                <View style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgetPassword}>Forgot password?</Text>
                </View>


                <TouchableOpacity>
                    <View style={styles.button}>
                    <Text style={styles.buttonTitle}>Sign in</Text>
                    </View>
                </TouchableOpacity>
                </KeyboardAvoidingView>

  
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


export default SignInScreen;
