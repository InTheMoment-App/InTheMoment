import React from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import { Appbar, FAB, } from 'react-native-paper';
import { Card, TextField, ChipsInput } from 'react-native-ui-lib';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    postContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },
    postButton: {
        position: 'absolute',
        margin: 16,
        right: 5,
        bottom: 30,
        color: 'white',
        backgroundColor: '#5170FF'
    },
    thumbnail: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },
});

export default function PostPreviewScreen({ route, navigation}) {
    const { media } = route.params;

    const chips = {
        labels: [ 'Trending' ]
    };

    return (
        <View style={ styles.container}>

            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()}/>
                <Appbar.Content title="Share your masterpiece"/>
            </Appbar.Header>

            <ScrollView style={styles.postContainer}>
                <Card style={{padding: 15}}>
                    <View style={{paddingBottom: 15}}>
                        <View>
                            <Text>Title Your Masterpiece</Text>
                            <TextField
                                maxLength={50}
                            />
                        </View>
                        <View>
                            <Text>Classify Your Masterpiece</Text>
                            <ChipsInput
                                placeholder="Hello"
                                tags={chips.labels}
                            />
                        </View>
                    </View>  
                    <Card 
                        onPress={() => {
                            navigation.navigate('FullScreenImage', {
                                media
                            });
                        }}
                    >
                        <Card.Image source={{ uri: media }} style={ styles.thumbnail}/>
                    </Card>
                </Card>
            </ScrollView>

            <FAB
                style={styles.postButton}
                icon="send"
                label="post"
                onPress={() => 
                    navigation.navigate('Home')
                }
            />
        </View>


    );
}