import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Button
} from 'react-native';



const DATA = [
    "rrr", "r", "rr"
]
export default function resultsScreen() {
    return (
        <View style={styles.container}>
            <Button color="#00ff00" title="filter" onPress={() => { }} />
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});