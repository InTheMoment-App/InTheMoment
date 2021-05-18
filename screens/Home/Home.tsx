import React from 'react';
import {
    Alert,
    FlatList, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { useQuery, gql } from '@apollo/client';

import Layout from 'constants/Layout';

const styles = StyleSheet.create({
    container: {
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

const POSTS = gql`
    query {
        allImages {
            fileurl
            datetime
            location
            uploadedBy
            tags
            thumbnail
        }
    }
`;

const Home = () => {
    const navigation = useNavigation();
    const fileUri = `${FileSystem.cacheDirectory  }tmp.jpg`;
    const { loading, error, data, refetch, networkStatus } = useQuery(POSTS);

    if ( loading ) return <ActivityIndicator/>;
    if ( error ) return;
    if ( !data ) return null;
    
    const refetching = networkStatus === 4;

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

        // add support for light mode - just making it nicer for dark mode here
        return <Ionicons name="heart-outline" size={32} color="white" />;
    };

    const openShareDialogAsync = async (imageURL : string) => {
        if (!(await Sharing.isAvailableAsync())) {
            Alert.alert("Whoops something wen't wrong")
            return;
        }

        FileSystem.downloadAsync(imageURL, fileUri)
            .catch((err) => {
                Alert.alert(err)
                
            });
        await Sharing.shareAsync(fileUri);
    }; 

    const renderPost = ({ item }) => (
        <Card 
            style={styles.cardStyle}                         
            onPress={() => {
                navigation.navigate('FullScreenImage', {
                    media: item.fileurl
                });
            }}
        >
            <Card.Cover source={{ uri: item.fileurl }} style={styles.image} />
            <Card.Actions>
                <TouchableOpacity>
                    { imageLiked(item.liked) }
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => openShareDialogAsync( item.fileurl ) }
                >
                    <Ionicons name="share-outline" size={32} color="white"/>
                </TouchableOpacity>
            </Card.Actions>
        </Card>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data.allImages}
                renderItem={renderPost}
                keyExtractor={(item) => item.uploadedBy}
                // onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                refreshing={refetching}
                onRefresh={() => refetch}
            />
        </SafeAreaView>
    );
}

export default Home;
