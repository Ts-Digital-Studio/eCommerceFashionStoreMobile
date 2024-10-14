import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window');

const isSmallDevice = width < 390;

export const Text = styled.Text`
    font-family: ${theme.fonts.BodyFont12};
    color: ${theme.colors.secundary};
    font-size: 25px;
`;

export const ConteinerTxtTitule = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: ${RFValue(40)}px;
    margin-left: ${RFValue(18)}px;
`;

export const Image = styled.Image`
    width: ${RFValue(24)}px;
    height: ${RFValue(22)}px;
`;

export const IconNotification = styled(Ionicons)`
    color: ${theme.colors.secundary};
    font-size: ${RFValue(22)}px;
    margin-left: ${isSmallDevice ? '77%' : '78%'};
    margin-top: ${RFValue(4)}px;
`;