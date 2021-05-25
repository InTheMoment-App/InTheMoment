import * as React from 'react';
import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Title, List } from 'react-native-paper';
import { Avatar, Colors } from 'react-native-ui-lib';
import POSTS from 'fixtures/posts'
import styles from './styles';

const Leaderboard = ({navigation}) => {

    const firstPlaceBadgeIconProps = {
        label: 'LD',
        size: 120,
        backgroundColor: Colors.red60,
        badgePosition: 'BOTTOM_RIGHT',
        badgeProps: {
            label: '1st',
            size: 35,
            borderWidth: 3,
            borderColor: Colors.white, // make colors work better here
            backgroundColor: Colors.green20,
        }
    };

    const regularRowBadgeIconProps = {
        label: 'LD',
        size: 50,
        backgroundColor: Colors.red60,
        badgePosition: 'BOTTOM_RIGHT',
        badgeProps: {
            label: '1st',
            borderWidth: 1.2,
            size: 'small',
            borderColor: Colors.white, // make colors work better here
            backgroundColor: Colors.blue20,
        }
    };

    const firstPlace = () => (
        <TouchableOpacity 
            style={styles.headerStyle}
            onPress={() => {
                navigation.navigate('FullScreenImage', {
                    media: 'https://picsum.photos/1536/2048'
                });
            }}
        >
            <Avatar
                source={{ uri: 'https://picsum.photos/1536/2048'}}
                {...firstPlaceBadgeIconProps}
            />
            <Title>Lorem Ipsum</Title>
        </TouchableOpacity>
    );

    const regularRow = (url: string) => (
        <Avatar
            source={{ uri: 'https://picsum.photos/1536/2048'}}
            {...regularRowBadgeIconProps}
            onPress={() => {
                navigation.navigate('FullScreenImage', {
                    media: url
                });
            }}
        />
    );

    const health = () => (
        <Title>22</Title>
    );

    const renderItem = ({item}) => (
        <List.Item
            title={item.author}
            left= {() => regularRow(item.url)}
            right={health}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={POSTS}
                renderItem={renderItem}
                ListHeaderComponent={firstPlace}
            />
        </SafeAreaView>
    );
}

export default Leaderboard;
