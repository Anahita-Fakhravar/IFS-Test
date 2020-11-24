//HomeScreen.js
import React, { useEffect, useState, useRef } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from 'react-native';
import io from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat'
import LoginScreen from '../login/LoginScreen';


const HomeScreen = () => {

  const [recvMessages, setRecvMessages] = useState([])
  const [hasJoined, setHasJoined] = useState(false)
  const socket = useRef(null)

  useEffect(() => {
    socket.current = io("http://192.168.56.1:3001")
    socket.current.on("message", message => {
      setRecvMessages(prevState => GiftedChat.append(prevState, message));
    })
  }, [])

  const onSend = messages => {
    socket.current.emit("message", messages[0].text)
    setRecvMessages(prevState => GiftedChat.append(prevState, messages))
  }

  const joinChat = username => {
    socket.current.emit('join', username)
    setHasJoined(true)
  }

  return (
    <View style={{ flex: 1 }}>
      {
        hasJoined ?
          <GiftedChat
            renderUsernameOnMessage
            messages={recvMessages}
            onSend={messages => onSend(messages)}
            user={{
              _id: 1,
            }}
          /> : <LoginScreen joinChat={joinChat} />
      }

    </View>

  )
}

export default HomeScreen