import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, FlatList } from 'react-native';
import { 
    Conteiner,
    Icon,
    TextInput,
    Text,
    DivTypes,
    IconArrow,
    ModalContainer,
    OptionList,
    OptionItem,
    Text2
} from './style';
import theme from '../../global/styles/theme';

export default function SearchBar() {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Women');

  const options = ['Women', 'Men', 'Kids', 'Accessories'];

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleOptionSelect = (item) => {
    setSelectedOption(item); // Atualiza a opção selecionada
    toggleModal(); // Fecha o modal
  };

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
       <TouchableOpacity onPress={toggleModal}>
        <DivTypes>
            <Text>{selectedOption}</Text>
            <IconArrow name='keyboard-arrow-down'/>
        </DivTypes>
       </TouchableOpacity>
       <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <ModalContainer>
          <OptionList>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <OptionItem onPress={() => handleOptionSelect(item)}>
                  <Text2>{item}</Text2>
                </OptionItem>
              )}
            />
          </OptionList>
        </ModalContainer>
      </Modal>
    </Conteiner>
  );
}
