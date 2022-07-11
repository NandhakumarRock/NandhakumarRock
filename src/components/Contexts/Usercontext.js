import React, { Component } from 'react'

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export default{UserProvider,UserConsumer}   