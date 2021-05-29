import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { auth } from 'utilities/firebase';
import styles from './styles';

const Settings = () => {

    const signOut = () => {
        auth
            .signOut()
            .then(() =>
                console.log(' user signed out ')
            ).catch( error => {
                console.error(error);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.settingsContainer}>
                <List.Section>
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
                        onPress={signOut}
                    />
                    <List.Item
                        title="Delete Account"
                        description="Permanently delete your account"
                        left={(props) => <List.Icon {...props} icon="delete" />}
                    />
                </List.Section>
            </ScrollView>
        </SafeAreaView>
    );

};


export default React.memo(Settings);
