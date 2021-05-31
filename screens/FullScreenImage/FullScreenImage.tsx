import React from 'react';
import { Modal } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import CachedImage from 'react-native-expo-cached-image';
import CloseModalButton from 'components/CloseModalButton';
import Layout from 'constants/Layout';

const FullScreenImage = ({route, navigation}) => {
    const { media } = route.params;

    return (
        <Modal visible transparent>
            <CloseModalButton/>
            <ImageZoom 
                cropWidth={Layout.window.width}
                cropHeight={Layout.window.height}
                imageWidth={Layout.window.width}
                imageHeight={200}
                style={{backgroundColor: 'black'}}
                doubleClickInterval={500}
                enableSwipeDown
                swipeDownThreshold={5}
                onSwipeDown={() => {
                    navigation.goBack();
                }}
            >
                <CachedImage 
                    style={{width:Layout.window.width, height:200}}
                    source={{uri: media}}
                />
            </ImageZoom>
        </Modal>

    );
}

export default React.memo(FullScreenImage);