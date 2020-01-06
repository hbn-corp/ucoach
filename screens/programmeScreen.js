import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Text
} from 'react-native';


export default function programmeScreen() {
    return (
        < ScrollView style={styles.container} >
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});