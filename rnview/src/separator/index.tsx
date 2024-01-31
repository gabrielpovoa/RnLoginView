import React from 'react';
import { View } from 'react-native';
import { Background } from '../../theme/Theming';

// import { Container } from './styles';

export const SeparatorItem= () => {
  return (
    <View style={{height:1,width:"100%", backgroundColor: Background.quaternary}}/>
  )
}