import React from 'react';

import SearchBar from '../../components/SearchBar';
import { Conteiner } from './style';
import Header from '../../components/Header/intex';

export default function Home() {
  return (
    <Conteiner>
      <Header/>
      <SearchBar/>
    </Conteiner>
  );
}
