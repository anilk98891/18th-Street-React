import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';


const EventRow = ({ title, description, image_url }) => (
    <View style={styles.container}>
        <View style={styles.container2}>
            <Image source={require('../../resources/Tabbar/circlebg.png')} style={{ width: '100%', height: 150, shadowOpacity: 1.0, shadowRadius: 5, shadowColor: 'lighrgray', borderWidth: 0.3, borderColor: 'lighrgray' }} />
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>

            </View>

        </View>
        <TouchableOpacity style={{ height: 40, width: 40, top: '-40%', left: '80%' }} onPress={() => Alert.alert('Alert', 'Sharing done.', [{ text: 'Ok' }])}>
            <Image style={{ height: 40, width: 40 }} source={require('../../resources/Sidemenu/share.png')} />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
    },

    container2: {
        flex: 1,
        marginTop: 0,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 1.0,
        shadowRadius: 5,
        elevation: 2,


    },
    title: {
        padding: 10,
        fontSize: 16,
        color: 'green',
    },
    container_text: {
        marginTop: 8,
        flex: 1,
        flexDirection: 'row',
    },
    description: {
        padding: 10,
        fontSize: 18,
        fontStyle: 'italic',
    },
    photo: {
        width: '100%',
        height: 150,
    },
});


export default EventRow;