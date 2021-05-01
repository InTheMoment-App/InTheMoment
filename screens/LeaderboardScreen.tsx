import * as React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Card, Divider } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { View } from '../components/Themed';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatContainerStyle: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    leftStyle: {
        marginRight: 40,
    },
    rightStyle: {
        marginRight: 20,
    },
});

export default function LeaderboardScreen() {
    const avatarIcon = (props : any, imageUrl: string, name: string) => {
        if (imageUrl === '') {
            const initial = name.charAt(0).toUpperCase();
            return (
                <Avatar.Text {...props} size={58} label={initial} />
            );
        }

        return (
            <Avatar.Image {...props} size={58} source={{ uri: imageUrl }} />
        );
    };

    const messageIcon = (props : any, hasNewMessage : boolean) => {
        if (hasNewMessage) {
            return (
                <FontAwesome {...props} name="circle" size={24} color="#506AD4" />
            );
        }

        return (<FontAwesome {...props} name="circle-thin" size={24} color="#e1e8ee" />);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: 'Devi', image: 'https://picsum.photos/200/300', hasNewMessage: true },
                    { key: 'Dan', image: 'https://picsum.photos/200/300', hasNewMessage: false },
                    { key: 'Dominic', image: '', hasNewMessage: false },
                    { key: 'Jackson', image: 'https://picsum.photos/200/300', hasNewMessage: false },
                    { key: 'James', image: 'https://picsum.photos/200/300', hasNewMessage: false },
                    { key: 'Joel', image: 'https://picsum.photos/200/300', hasNewMessage: false },
                    { key: 'John', image: 'https://picsum.photos/200/300', hasNewMessage: false },
                    { key: 'Jillian', image: 'https://picsum.photos/200/300', hasNewMessage: false },
                    { key: 'Jimmy', image: 'https://picsum.photos/200/300', hasNewMessage: false },
                    { key: 'Julie', image: 'https://picsum.photos/200/300', hasNewMessage: false },
                ]}
                renderItem={({ item }) => (
                    <View>
                        <View style={styles.chatContainerStyle}>
                            <TouchableOpacity>
                                <Card.Title
                                    title={item.key}
                                    subtitle="Card Subtitle"
                                    left={(props) => avatarIcon(props, item.image, item.key)}
                                    leftStyle={styles.leftStyle}
                                    right={(props) => messageIcon(props, item.hasNewMessage)}
                                    rightStyle={styles.rightStyle}
                                />
                            </TouchableOpacity>
                        </View>
                        <Divider inset />
                    </View>
                )}
            />
        </View>
    );
}
