import React, { useContext, useEffect, useState } from 'react';
import CachedImage from 'react-native-expo-cached-image';
import { SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import {
    Avatar, ActivityIndicator, Title, Paragraph,
} from 'react-native-paper';
import { View } from 'components/Themed';
import UserContext from 'utilities/userContext';
import { firestore } from 'utilities/firebase';

import styles from './styles';

const Profile = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const user = useContext(UserContext);

    useEffect(() => {
        const subscriber = firestore
            .collection('posts')
            .doc(user.uid)
            .collection('alive')
            .orderBy("uploaded_at", "desc")
            .onSnapshot(querySnapshot => {
                const postsTemp = [];
      
                querySnapshot.forEach(documentSnapshot => {
                    postsTemp.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
      
                setPosts(postsTemp);
                setLoading(false);
            });
      
        return () => subscriber();
    }, []);


    if ( loading ){
        return <ActivityIndicator/>;
    }

    const renderItem = ({item}) => (
        <TouchableOpacity 
            style={styles.tileButton}
            onPress={() => {
                navigation.navigate('FullScreenImage', {
                    media: item.url
                });
            }}
        >
            <CachedImage 
                style={styles.thumbnail} 
                // resizeMode='cover' 
                source={{ uri: item.url}}
            />
        </TouchableOpacity>
    )

    const userInfo = (displayName : any) => (
        <View style={styles.headerStyle}>
            <Avatar.Image size={104} source={{ uri: 'https://picsum.photos/1536/2048' }} />
            <Title>{displayName}</Title>
            <Paragraph>Account Score: 5250</Paragraph>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* <UserContext.Consumer>
                { context => ( */}
            <FlatList
                data={posts}
                // keyExtractor={(item) => item.uploaded_at}
                numColumns={3}
                renderItem={renderItem}
                ListHeaderComponent={userInfo(user.displayName)}
            />
            {/* )}
            </UserContext.Consumer> */}
        </SafeAreaView>
    );
}


export default Profile;
