import React, { useContext } from "react";
import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";

import { Text } from " ../../../components/typography/text.component";
import { Spacer } from " ../../../components/spacer/spacer.component";
import { SafeArea } from " ../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]}
`;

const AvatarContainer = styled.View`
    align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext);
    return (
        <SafeArea>
            <AvatarContainer>
                <Spacer position="top" size="large">
                    <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
                </Spacer>
                <Spacer position="top" size="large">
                    <Text variant="caption">{user.email}</Text>
                </Spacer>
            </AvatarContainer>
            <List.Section>
                <SettingsItem
                    title="Perfil"
                    description="Edite seu perfil"
                    left={(props) => <List.Icon {...props} color="black" icon="account" />}
                    onPress={() => navigation.navigate("Profile")}
                />
                <SettingsItem
                    title="Favoritos"
                    description="Seus favoritos"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => navigation.navigate("Favourites")}
                />
                <SettingsItem
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door" />}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    );
};
