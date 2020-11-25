//HomeScreen.js
import React, { useEffect, useState, useRef } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from 'react-native';
import io from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat'
import { useSelector } from 'react-redux';


const HomeScreen = () => {

  const [recvMessages, setRecvMessages] = useState([])
  const loginData = useSelector(state => state.LoginReducer)
  const socket = useRef(null)

  console.log('loginData',loginData)

  // socket.current.emit('join', loginData.username)

  useEffect(() => {
    socket.current = io("http://192.168.56.1:3001")
    socket.current.emit('join', loginData.username)
    socket.current.on("message", message => {
      setRecvMessages(prevState => GiftedChat.append(prevState, message));
    })
  }, [])

  const onSend = messages => {
    socket.current.emit("message", messages[0].text)
    setRecvMessages(prevState => GiftedChat.append(prevState, messages))
  }

  return (

    <GiftedChat
      renderUsernameOnMessage
      messages={recvMessages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default HomeScreen