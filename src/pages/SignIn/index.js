import { View, Text, Platform } from 'react-native'
import React, {useState, useContext} from 'react'
import { useNavigation } from '@react-navigation/native'
import {Background, Container, AreaInput, Input, Logo, SubmitButton, SubmitText, Link, LinkText} from './styles'
import { AuthContext } from '../../contexts/auth'

export default function SignIn() {
  const navigation = useNavigation()
  
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const { user } = useContext(AuthContext)

  function handleLogin(){
    console.log(user.nome)
    console.log(user.uid)
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
      <Logo source={require('../../Images/Logo.png')} />

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

      <SubmitButton onPress={handleLogin}>
        <SubmitText>Acessar</SubmitText>
      </SubmitButton>

      <Link onPress={()=>navigation.navigate('SignUp')}>
        <LinkText>Criar uma conta</LinkText>
      </Link>

      </Container>
    </Background>
  )
}