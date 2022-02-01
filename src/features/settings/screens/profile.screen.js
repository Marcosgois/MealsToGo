import React, { useContext } from "react";
import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";

import { Text } from " ../../../components/typography/text.component";
import { Spacer } from " ../../../components/spacer/spacer.component";
import { SafeArea } from " ../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]}
`;

const AvatarContainer = styled.View`
    align-items: center;
`;

export const ProfileScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext);
    return (
        <SafeArea>
            <AvatarContainer>
                <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
                <Spacer position="top" size="large">
                    <Text variant="caption">Imagem Perfil</Text>
                </Spacer>
            </AvatarContainer>
            <List.Section>
                <ProfileItem
                    title={user.email}
                    description="Email"
                    left={(props) => <List.Icon {...props} color="black" icon="account" />}
                    onPress={() => null}
                />
                <ProfileItem
                    title={user.nome}
                    description="Nome"
                    left={(props) => <List.Icon {...props} color="black" icon="book" />}
                    onPress={() => null}
                />
                <ProfileItem
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door" />}
                    onPress={() => null}
                />
            </List.Section>
        </SafeArea>
    );
};
