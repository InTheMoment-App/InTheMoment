import React, { useState } from 'react';
import { 
    Keyboard, 
    TouchableWithoutFeedback, 
    SafeAreaView, 
    ScrollView,
    View
} from 'react-native';
import { Button, Dialog, List, Paragraph, Portal } from 'react-native-paper';
import { TextField } from 'react-native-ui-lib';
import { deleteAccount, signOut } from './data/auth';
import styles from './styles';

const Settings = () => {

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [delVisible, setDelVisible] = useState(false);

    const showDelDialog = () => setDelVisible(true);
    const hideDelDialog = () => setDelVisible(false);


    const performAccountDelete = () => {
        if (!deleteAccount(password )) {
            setPasswordError("Failed to delete account, please try again.");
        }
    };

    const confirmDeleteAccount = () => (
        <Portal>
            <Dialog visible={delVisible} onDismiss={hideDelDialog}>
                <Dialog.Title>Delete Account</Dialog.Title>
                <Dialog.Content>
                    <TouchableWithoutFeedback
                        onPress={ () => Keyboard.dismiss()}
                        accessible={false}
                    >
                        <View>
                            <Paragraph>Please re-enter your password to delete your account.</Paragraph>
                            <TextField
                                maxLength={64}
                                onChangeText={ pass => setPassword(pass)}
                                error={passwordError}
                                secureTextEntry
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDelDialog}>Cancel</Button>
                    <Button onPress={performAccountDelete}>Delete</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );

    return (
        <SafeAreaView style={styles.container}>
            { confirmDeleteAccount() }
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
                        onPress={showDelDialog}
                    />
                </List.Section>
            </ScrollView>
        </SafeAreaView>
    );

};


export default React.memo(Settings);
