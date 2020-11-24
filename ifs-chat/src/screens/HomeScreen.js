//HomeScreen.js
import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import io from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat'


const HomeScreen = () => {

  const [recvMessages, setRecvMessages] = useState([])
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

  return (

    <GiftedChat
      messages={recvMessages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default HomeScreen