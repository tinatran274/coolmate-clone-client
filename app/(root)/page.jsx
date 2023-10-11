'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button, Space } from 'antd'
import NavBar from '../../components/nav-bar.jsx'
import MainSlider from '../../components/slider.jsx'
import store from '../../redux/store.js'
import { Provider } from 'react-redux'
import Header from '../../components/header/header.jsx'

const Home = () => {
  const router = useRouter()

  return (
    <Provider store={store}>
      <Header />
      <NavBar />
      <MainSlider />
    </Provider>
  )
}
export default Home
