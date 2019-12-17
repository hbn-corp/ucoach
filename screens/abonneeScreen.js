import React from 'react';
import {
    View,
    Text,
    ProgressBarAndroid
} from 'react-native';

import styles from '../constants/style'

export default function abonneeScreen() {
    return (
        < View style={styles.container} >
            <Text>
                vous avais selectioné un truc
            </Text>
            < View >
                <Text>
                    Votre prochain Rendez-vous
              </Text>
                <Text>
                    Jour, dd  mois Année
              </Text>
            </View>
            <ProgressBarAndroid
                styleAttr="Horizontal"
                color="red"
                indeterminate={false}
                progress={0.5}
            />
        </View>
    );
}
