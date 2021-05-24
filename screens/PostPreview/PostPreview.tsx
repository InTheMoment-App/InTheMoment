import React from 'react';
import {View, Text, ScrollView } from 'react-native';
import { Appbar, FAB, } from 'react-native-paper';
import { Card, TextField, ChipsInput } from 'react-native-ui-lib';
import styles from './styles';

const PostPreview = ({route, navigation}) => {
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

export default PostPreview;