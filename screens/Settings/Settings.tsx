import * as React from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { View } from 'components/Themed';
import styles from './styles';

const Settings = () => 
    (
        <View style={styles.container}>
            <ScrollView style={styles.headerStyle}>
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
                    />
                    <List.Item
                        title="Delete Account"
                        description="Permanently delete your account"
                        left={(props) => <List.Icon {...props} icon="delete" />}
                    />
                </List.Section>
            </ScrollView>
        </View>
    )


export default Settings;
