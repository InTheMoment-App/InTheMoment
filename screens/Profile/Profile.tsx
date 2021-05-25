import * as React from 'react';
import { SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import {
    Avatar, Title, Paragraph,
} from 'react-native-paper';
import { View } from 'components/Themed';
import styles from './styles';
import POSTS from 'fixtures/posts'

const Settings = ({route, navigation}) => {

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity 
                style={styles.tileButton}
                onPress={() => {
                    navigation.navigate('FullScreenImage', {
                        media: item.url
                    });
                }}
            >
                <Image 
                    style={styles.thumbnail} 
                    resizeMode='cover' 
                    source={{ uri: item.url}}
                />
            </TouchableOpacity>
        );
    };

    const userInfo = () => {
        return (
            <View style={styles.headerStyle}>
                <Avatar.Image size={104} source={{ uri: 'https://picsum.photos/1536/2048' }} />
                <Title>Lorem Ipsum</Title>
                <Paragraph>Account Score: 5250</Paragraph>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={POSTS}
                keyExtractor={(item) => item.id}
                numColumns={3}
                renderItem={renderItem}
                ListHeaderComponent={userInfo}
            />
        </SafeAreaView>
    );
}


export default Settings;
