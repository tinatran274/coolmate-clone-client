'use client'

import Image from 'next/image'
import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counter/counterSlice'
import { useRouter } from 'next/navigation'

const MainSlider = () => {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
  

    return(
      <div>
        {/* test redux*/}
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>

    )
}
export default MainSlider
