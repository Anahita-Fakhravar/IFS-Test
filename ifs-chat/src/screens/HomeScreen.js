//HomeScreen.js
import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TextInput } from 'react-native';
import io from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat'


const HomeScreen = () => {

  const [messageToSend, setMessageToSend] = useState("")
  const [recvMessages, setRecvMessages] = useState([])
  const socket = useRef(null)

  useEffect(() => {
    
    socket.current = io("http://192.168.56.1:3001")
    socket.current.on("message", message => {
      const testMessage = {
        _id: 3,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 3,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      }
      testMessage.text = message
      setRecvMessages(prevState => GiftedChat.append(prevState, testMessage));
    })
    setRecvMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello from mySelf',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  /*  const textOfRecMessages = recvMessages.map(msg => (
     <Text key={msg}>{msg}</Text>
   )); */

  const onSend = messages => {
   // console.log('message ana', messages)
    socket.current.emit("message", messages[0].text)
    // setMessageToSend("")
  }

  /*
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      {textOfRecMessages}
      <TextInput value={messageToSend}
        placeholder={'Enter your chat msg'}
        onChangeText={(txt) => setMessageToSend(txt)}
        onSubmitEditing={sendMessage}
      />
    </View>
  */

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