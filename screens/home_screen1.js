import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    TouchableOpacity,
    Text,

} from 'react-native';

import styles from '../constants/style'

export default function home_screen1() {
    return (
        < View style={styles.container} >
            <Text>
                Welcome to Ucoatch 'elhamidh'
            </Text>
            < View >
                <Text>
                    Choisissez votre programme et lancez vous.
              </Text>

            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>  Perdre du poids </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>  gagner du muscle </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>  preparation physique </Text>
                </TouchableOpacity>
                
            </View>
        );
        </View>
    );
}
