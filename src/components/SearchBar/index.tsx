import React from 'react';
import { 
    Conteiner,
    Icon,
    TextInput,
} from './style';

export default function SearchBar() {
  return (
    <Conteiner>
       <Icon 
        name='search'
        />
       <TextInput
        placeholder='search here'
       />
    </Conteiner>
  );
}
