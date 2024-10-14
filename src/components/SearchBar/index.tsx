import React from 'react';
import { 
    Conteiner,
    Icon,
    TextInput,
    Text,
    DivTypes,
    IconArrow
} from './style';
import theme from '../../global/styles/theme';

export default function SearchBar() {
  return (
    <Conteiner>
       <Icon 
        name='search'
        color={theme.colors.secundary}
        />
       <TextInput
        placeholder='Search here'
       />
       <Text>|</Text>
       <DivTypes>
          <Text>Women</Text>
          <IconArrow name='keyboard-arrow-down'/>
       </DivTypes>
    </Conteiner>
  );
}
