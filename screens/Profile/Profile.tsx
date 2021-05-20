import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
    List, Avatar, Title, Paragraph,
} from 'react-native-paper';
import Layout from 'constants/Layout';
import { View } from 'components/Themed';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headerStyle: {
        width: Layout.card.width,
        height: Layout.card.height * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 0,
        overflow: 'hidden',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

const Profile = () => 
    (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerStyle}>
                    <Avatar.Image size={104} source={{ uri: 'https://picsum.photos/1536/2048' }} />
                    <Title>Lorem Ipsum</Title>
                    <Paragraph>Account Score: 5250</Paragraph>
                </View>
                <List.Section>
                    <List.Subheader>Settings</List.Subheader>
                    <List.Item
                        title="General"
                        description="Some general settings go here"
                        left={(props) => <List.Icon {...props} icon="cog" />}
                    />
                    <List.Item
                        title="Appearance"
                        description="Customize the feel of the app"
                        left={(props) => <List.Icon {...props} icon="brush" />}
                    />
                    <List.Item
                        title="Notifications"
                        description="Keep track of what is going on"
                        left={(props) => <List.Icon {...props} icon="bell" />}
                    />
                    <List.Item
                        title="Security"
                        description="Change password etc"
                        left={(props) => <List.Icon {...props} icon="security" />}
                    />
                </List.Section>
                <List.Section>
                    <List.Subheader>Danger Area</List.Subheader>
                    <List.Item
                        title="Logout"
                        description="Logout of your account."
                        left={(props) => <List.Icon {...props} icon="logout" />}
                    />
                    <List.Item
                        title="Delete Acount"
                        description="Permanently delete your account"
                        left={(props) => <List.Icon {...props} icon="delete" />}
                    />
                </List.Section>
            </ScrollView>
        </View>
    )


export default Profile;