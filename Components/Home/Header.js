import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/ig.png')}/>
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require('../../assets/plus.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require('../../assets/love.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image style={styles.icon} source={require('../../assets/msg.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        paddingTop: 10
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    iconsContainer: {
        flexDirection: 'row'
    },
    icon: {
        width: 25,
        height: 25,
        marginLeft: 10,
        resizeMode: 'contain',
        color: 'white'
    },
    unreadBadge: {
        backgroundColor: 'red',
        position: 'absolute',
        left: 18,
        width: 30,
        bottom: 15,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600',
    }
})

export default Header