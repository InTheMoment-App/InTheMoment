import * as React from 'react';
import {
    StyleSheet, ScrollView, SafeAreaView, TouchableOpacity,
} from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

import Layout from 'constants/Layout';

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardStyle: {
        width: Layout.card.width,
        height: Layout.card.height,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 0,
        overflow: 'hidden',
    },
    image: {
        justifyContent: 'center',
        width: Layout.card.image_width,
        height: Layout.card.image_height,
        borderRadius: 0,
    },
});

export default function HomeScreen() {
    const navigation = useNavigation();
    const fileUri = FileSystem.cacheDirectory + 'tmp.jpg';
    
    type CardType = {
        key: string,
        name: string,
        liked: boolean
    }

    const cards = [
        { key: '1', name: 'https://picsum.photos/1536/2048', liked: true },
        { key: '2', name: 'https://picsum.photos/1536/2048', liked: false },
        { key: '3', name: 'https://picsum.photos/1536/2048', liked: false },
        { key: '4', name: 'https://picsum.photos/1536/2048', liked: false },
        { key: '5', name: 'https://picsum.photos/1536/2048', liked: false },
        { key: '6', name: 'https://picsum.photos/1536/2048', liked: false },
        { key: '7', name: 'https://picsum.photos/1536/2048', liked: false },
        { key: '8', name: 'https://picsum.photos/1536/2048', liked: false },
        { key: '9', name: 'https://picsum.photos/1536/2048', liked: false },
        { key: '10', name: 'https://picsum.photos/1536/2048', liked: false },
    ];

    const imageLiked = (liked: boolean) => {
        if (liked) {
            return (
                <Ionicons
                    name="heart"
                    size={32}
                    color="#FC160F"
                />
            );
        }

        return <Ionicons name="heart-outline" size={32} color="#FC160F" />;
    };

    // const openShareDialogAsync = async (imageURL : string) => {
    //     if (!(await Sharing.isAvailableAsync())) {
    //         alert(`Uh oh, sharing isn't available on your platform`);
    //         return;
    //       }

    //     FileSystem.downloadAsync(imageURL, fileUri)
    //     .then(({ uri }) => {
    //         // setState(`Downloaded image to ${uri}`);
    //     })
    //     .catch((err) => {
    //     //   setState('Error downloading image');
    //       console.log(JSON.stringify(err));
    //     });

    //     await Sharing.shareAsync(fileUri);
    // }; 

    const renderCards = (views: CardType[]): JSX.Element[] => {
        const { cardStyle } = styles;
        return views.map((card) => (
            <Card 
                style={cardStyle} 
                key={card.key}                         
                onPress={() => {
                    navigation.navigate('FullScreenImage', {
                        media: card.name
                    });
                }}
            >
                <Card.Cover source={{ uri: card.name }} style={styles.image} />
                <Card.Actions>
                    <TouchableOpacity>
                        { imageLiked(card.liked) }
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        onPress={() => openShareDialogAsync( card.name ) }
                    >
                        <Entypo name="share" size={32} color="blue"/>
                    </TouchableOpacity> */}
                </Card.Actions>
            </Card>
        ));
    };

    return (
        <SafeAreaView style={styles.scrollview}>
            <ScrollView>
                { renderCards(cards) }
            </ScrollView>
        </SafeAreaView>
    );
}
