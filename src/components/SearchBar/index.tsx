import React from 'react';
import { 
    Conteiner,
    Icon,
    TextInput,
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
    </Conteiner>
  );
}
