import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    window: {
        width,
        height,
        aspect_ratio: width / height,
    },
    card: {
        width,
        height: height * 0.7,
        image_width: width,
        image_height: height * 0.7 * 0.92,
    },
    isSmallDevice: width < 375,
};
