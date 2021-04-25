import * as React from 'react';
import {
    Dimensions, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

const CARD_WIDTH = Dimensions.get('window').width;
const CARD_HEIGHT = Dimensions.get('window').height * 0.7;

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardStyle: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 0,
        overflow: 'hidden',
    },
    image: {
        justifyContent: 'center',
        width: CARD_WIDTH,
        height: CARD_HEIGHT * 0.92,
        borderRadius: 0,
    },
});

export default function HomeScreen() {
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

    const renderCards = (views: CardType[]): JSX.Element[] => {
        const { cardStyle } = styles;
        return views.map((card) => (
            <Card style={cardStyle} key={card.key}>
                <Card.Cover source={{ uri: card.name }} style={styles.image} />
                <Card.Actions>
                    <TouchableOpacity>
                        { imageLiked(card.liked) }
                    </TouchableOpacity>
                </Card.Actions>
            </Card>
        ));
    };

    return (
        <SafeAreaView style={styles.scrollview}>
            <ScrollView showsVerticalScrollIndicator={false}>
                { renderCards(cards) }
            </ScrollView>
        </SafeAreaView>
    );
}
