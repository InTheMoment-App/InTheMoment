import { firebase, firestore, storage } from 'utilities/firebase';
import uuid from 'react-native-uuid';
import React, { useState, useEffect } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { Text, ProgressBar } from 'react-native-paper';
import styles from './styles';

const IMAGE_DIR = 'posts/images/';

const bucketFilename = () => uuid.v4();

const storeInDatabase = (title: string, url: string) => {
    const posts = firestore.collection('posts');
    posts.add({
        title,
        url,
        uploaded_at: new Date().toISOString(),
        location: "here",
        author: "test",
        tags: "example,tags",
        thumbnail: null,
        video: false
    })
        .then( () => {
            Alert.alert("Stored post information");
        })
        .catch((error) => {
            Alert.alert("Error adding document: ", error);
        });

};

const uploadImage = ({route, navigation}) => {
    const { title, media } = route.params;
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        ( async() => {
            const response  = await fetch(media);
            const blob = await response.blob();
        
            const upload = storage
                .ref()
                .child(IMAGE_DIR + bucketFilename())
                .put(blob);
            
            upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot : any) => {
                    setProgress(snapshot.bytesTransferred / snapshot.totalBytes);
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED:
                            break;
                        case firebase.storage.TaskState.RUNNING:
                            break;
                        default:
                            break;
                    }
                }, 
                (error : any) => {
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            Alert.alert(`Unauthorized: ${  error.message}`);
                            break;
                        case 'storage/canceled':
                            Alert.alert(`Cancelled: ${  error.message}`);
                            break;
                        case 'storage/unknown':
                        default:
                            Alert.alert(`Unknown: ${  error.message}`);
                            break;
                    }
                }, 
                () => {
                    upload.snapshot.ref.getDownloadURL().then((downloadURL : any) => {
                        storeInDatabase(title, downloadURL);
                        navigation.navigate('Home');
                    });
                }
            );
        })();
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <Text>Publishing...</Text>
            <ProgressBar progress={progress}/>
        </SafeAreaView>
    );
  
};

export default uploadImage;