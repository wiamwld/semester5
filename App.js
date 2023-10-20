import React, { Component } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Text } from "react-native";


class App extends Component {
    state = {
        login: "",
        password: "",
        alamat: ""
    }
    firstnameTextChange = (inputText) => {
        this.setState({ login: inputText })
    }

    lastnameTextChange = (inputText) => {
        this.setState({ password: inputText })
    }
    alamatTextChange = (inputText) => {
        this.setState({ alamat: inputText })
    }

    hasil = () => {
        alert("masukkan email" + this.state.login + this.state.password + " dan password: " + this.state.alamat)
    }
    render() {
        return (
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={this.firstnameTextChange}
                    placeholder="email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={this.lastnameTextChange}
                    placeholder="password"
                />
                {/* <TextInput
          style={styles.input}
          onChangeText={this.alamatTextChange}
          placeholder = "masukkan alamat"
        /> */}
                <Button styles={styles.tombol}
                    title="login"
                    onPress={this.hasil}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    tombol: {
        backgroundColor: 'blue'
    }
});

export default App;