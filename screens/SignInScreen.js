import React from 'react';
import {
    View,
    TouchableOpacity,

    StyleSheet
} from 'react-native';

export default function SignInScreen() {
    return (

        < View style={styles.container} >
            <TouchableOpacity onPress={this._onPressButton}>
      <Image
        style={styles.button}
        source={require('./https://img.utdstc.com/icons/facebook-android.png:s')}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={this._onPressButton}>
      <Image
        style={styles.button}
        source={require('./https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2018/12/google-g-logo.jpg')}
      />
    </TouchableOpacity>

           
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