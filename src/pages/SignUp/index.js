import { View, Text, Platform } from 'react-native'
import React, {useState, useContext} from 'react'


import {Background, Container, AreaInput, Input, Logo, SubmitButton, SubmitText} from '../SignIn/styles'


export default function SignUp() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
     
      <AreaInput>
        <Input 
        placeholder='Nome'
        autoCorrect={false}
        autoCapitalize='none'
        value={nome}
        onChangeText={(text)=>setNome(text)}
        />
      </AreaInput>

      <AreaInput>
        <Input 
        placeholder='Email'
        autoCorrect={false}
        autoCapitalize='none'
        value={email}
        onChangeText={(text)=>setEmail(text)}
        />
      </AreaInput>

      <AreaInput>
        <Input 
        placeholder='Senha'
        autoCorrect={false}
        autoCapitalize='none'
        value={senha}
        onChangeText={(text)=>setSenha(text)}
        />
      </AreaInput>

      <SubmitButton>
        <SubmitText>Cadastrar</SubmitText>
      </SubmitButton>

      </Container>
    </Background>
  )
}