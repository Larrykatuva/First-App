import React from 'react'
import {StyleSheet, SafeAreaView} from "react-native";
import Header from "../Components/Home/Header";
import Stories from "../Components/Home/Stories";
import Posts from "../Components/Home/Posts";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Stories/>
            <Posts/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})

export default HomeScreen