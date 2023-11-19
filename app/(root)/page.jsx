'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../components/header/header.jsx'
import NavBar from '../../components/nav-bar/nav_bar.jsx'
import ImgSlider from '../../components/slider/slider.jsx'
import BodyHome from '../../components/home/body_home.jsx'
import Footer from '../../components/footer/footer.jsx'
import store from '../../redux/store.js'
import { Provider } from 'react-redux'
import { Button } from '@/components/ui/button'
import { UpOutlined } from '@ant-design/icons'

const Home = () => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <Provider store={store} className="relative">
      <Header />
      <NavBar />
      <ImgSlider />
      <BodyHome />
      <Footer />
      <Button
        className = {`fixed font-bold left-8 bottom-4 bg-blue-500 rounded-full ${
          isVisible ? 'block' : 'hidden'
        }`}
        onClick={scrollToTop}
      >
        <UpOutlined />
      </Button>
    </Provider>
  )
}
export default Home
