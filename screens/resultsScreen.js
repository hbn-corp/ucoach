import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Text
} from 'react-native';
import Card from '../components/Card'
import styles from '../constants/style';


class resultsScreen extends React.Component {
    static navigationOptions = {
        // headerTitle instead of title
        title: 'results'
    };

    constructor(props) {
        super(props);
        this.state = {
            list: [{ nom: "aa" }, { nom: "b" }, { nom: "aab" }, { nom: "ba" }, { nom: "aaa" }, { nom: "bab" }, { nom: "aaab" }]
        }
    }


    _renderItem = ({ item, index }) => <Card nom={item.nom} />
    onPress = () => { }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text> Filter </Text>
                </TouchableOpacity>
                <FlatList
                    data={this.state.list}
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.nom}
                />
            </View>
        );
    }
}


export default resultsScreen;