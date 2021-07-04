import styled from 'styled-components';
import { View, Text, TextInput } from 'react-native';

export const ViewStyled = styled(View)`
  flex: 1;
  background-color: #fff;
  flex-direction: column;
`;

export const List = styled(View)`
  flex-direction: row;
  padding: 20px;
  background-color: #fff;
  justify-content: space-between;
`;

export const HideableList = styled(View)`
  flex-direction: row;
  padding: 20px;
  background-color: #d9d7d7;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  font-size: 18px;
  margin-left: 20px;
`;

export const ConfigText = styled(Text)`
  font-size: 16px;
  margin-right: 15px;
`;

export const Input = styled(TextInput)`
  font-size: 16px;
  margin-right: 15px;
`;
