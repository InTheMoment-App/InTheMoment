import React from 'react';
import { Image, Modal } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import CachedImage from 'react-native-expo-cached-image';
import CloseModalButton from 'components/CloseModalButton';
import Layout from 'constants/Layout';

const FullScreenImage = ({route, navigation}) => {
    const { media, localImage } = route.params;

    const displayImage = (url: string) => {
        if ( localImage ) {
            return(
                <Image 
                    style={{width:Layout.window.width, height:Layout.window.height}}
                    source={{uri: url}} 
                />
            );
        }

        return(
            <CachedImage 
                style={{width:Layout.window.width, height:Layout.window.height}}
                source={{uri: url}}
            />
        );
    };

    return (
        <Modal visible transparent>
            <CloseModalButton/>
            <ImageZoom 
                cropWidth={Layout.window.width}
                cropHeight={Layout.window.height}
                imageWidth={Layout.window.width}
                imageHeight={Layout.window.height}
                style={{backgroundColor: 'black'}}
                doubleClickInterval={500}
                enableSwipeDown
                swipeDownThreshold={5}
                onSwipeDown={() => {
                    navigation.goBack();
                }}
            >
                {displayImage(media)}
            </ImageZoom>
        </Modal>

    );
}

export default React.memo(FullScreenImage);