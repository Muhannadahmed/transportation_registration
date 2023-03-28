import React from "react";
import { StyleSheet, View, Text, Dimensions, SafeAreaView, KeyboardAvoidingView, Pressable, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/Colors";
import SelectDropdown from 'react-native-select-dropdown'
import { useNavigation } from "@react-navigation/native";


const { height } = Dimensions.get("window");


function RegisterScreen() {

  const navigation = useNavigation();

  const goToCheckout = () =>{
    return navigation.navigate("Checkout");
  };
  
  const countries = ["tagamoe", "sheikh Zayed"]
  
 

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView contentContainerStyle={{justifyContent: "center", alignItems: "center"}}>
 
                <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.content}
                >
                <Text style={styles.title}>Registration</Text>


                <Text style={styles.subtitle}>Sign in to your account</Text>


                <Pressable style={{width: 300}}>
                    <View style={styles.form}>
                    <Text style={styles.label}>Name</Text>

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
                    <Text style={styles.label}>GAF Email</Text>

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
                    <Text style={styles.label}>Route</Text>

                    <SelectDropdown
                        data={countries}
                        onSelect={(selectedItem, index) => {
                          console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          // text represented after item is selected
                          // if data array is an array of objects then return selectedItem.property to render after item is selected
                          return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                          // text represented for each item in dropdown
                          // if data array is an array of objects then return item.property to represent item in dropdown
                          return item
                        }}
                      />

                   
                    </View>
                </Pressable>


                <Pressable style={{width: 300, marginTop: 10}}>
                    <View style={styles.form}>
                    <Text style={styles.label}>Level</Text>

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
                    <Text style={styles.label}>Address</Text>

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

                


                <TouchableOpacity style = {{marginTop : 50}} onPress={goToCheckout}>
                    <View style={styles.button}>
                    <Text style={styles.buttonTitle}>Register</Text>
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

export default RegisterScreen;
