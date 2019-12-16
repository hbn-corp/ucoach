import React from 'react';
import { Text, View, Image, Button, TouchableHighlight } from 'react-native';

import styles from '../constants/style';

export default class Card extends React.PureComponent {

    render() {
        return (
            <View style={styles.card}>
                <View style={styles.image} >
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: 'https://cdn.pixabay.com/photo/2019/10/24/19/50/skull-4575123_960_720.png' }}
                    />
                </View>
                <View>
                    <Text style={styles.Name} >{this.props.nom}</Text>
                    <Text>etoiles</Text>
                    <Text>description</Text>
                    <View>
                        <Button
                            color="gray"
                            title="en savoir plus"
                            onPress={() => console.log('buutt')} />

                        <Button
                            title="Engager"
                            color="green"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                </View>

            </View>
        );
    }
}
