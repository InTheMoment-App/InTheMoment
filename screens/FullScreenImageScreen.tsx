import React from 'react';
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { ActivityIndicator } from 'react-native-paper'
import { CloseModalButton } from 'components/CloseModalButton';

export default function FullScreenImageScreen({ route, navigation}) {
    const { media } = route.params;

    const images = [{
        url: media,
        props: {}
    }]

    return (
        <Modal visible transparent>
            <ImageViewer
                enableSwipeDown
                imageUrls={images}
                swipeDownThreshold={5}
                doubleClickInterval={500}
                onSwipeDown={() => {
                    navigation.goBack();
                }}
                saveToLocalByLongPress={false}
                renderIndicator={() => null as any}
                loadingRender={() => <ActivityIndicator size='large'/> }
                renderHeader={ () => <CloseModalButton/> }
            />
        </Modal>

    );
}