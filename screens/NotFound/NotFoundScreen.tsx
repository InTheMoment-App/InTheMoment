import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from 'types';
import styles from './styles';

const NotFoundScreen = ({navigation} : StackScreenProps<RootStackParamList, 'NotFound'>) => (
    <View style={styles.container}>
        <Text style={styles.title}>This screen doesn&apos;t exist.</Text>
        <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
            <Text style={styles.linkText}>Go to home screen!</Text>
        </TouchableOpacity>
    </View>
)

export default NotFoundScreen;
