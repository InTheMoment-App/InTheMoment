import * as React from 'react';
import { ScrollView } from 'react-native';
import {
    Avatar, Title, Paragraph,
} from 'react-native-paper';
import { View } from 'components/Themed';
import styles from './styles';

const Settings = () => 
    (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerStyle}>
                    <Avatar.Image size={104} source={{ uri: 'https://picsum.photos/1536/2048' }} />
                    <Title>Lorem Ipsum</Title>
                    <Paragraph>Account Score: 5250</Paragraph>
                </View>
            </ScrollView>
        </View>
    )


export default Settings;
