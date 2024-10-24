"use client"

import './Slider.css'

import {useState, useEffect, useRef} from "react"
import {ChevronLeftIcon, ChevronRightIcon} from "./Icons"


export const Slider = ({autoplay = false, children}) => {
  const [current, setCurrent] = useState(0)
  const interval = useRef(null)

  useEffect(
    () => {
      if (!autoplay) return

      interval.current = setInterval(() => setCurrent((x) => (x + 1) % children.length), 700)

      return () => {
        clearInterval(interval.current)
      }
    },
    []
  )

  const buttons = (
    <div className="slider-dots">
      {children.map((child, index) => (
        <button
          key={index}
          className={`slider-dot ${current === index ? "current" : ""}`}
          onClick={() => {setCurrent(index); clearInterval(interval.current)}}
        />
      ))}
    </div>
  )

  const content = (
    <div className="slide">{children[current].props.children}</div>
  )

  return (
    <div className="slider">
      <div className="slider-container">
        <button className='prev'
          onClick={() => {setCurrent((x) => x - (x > 0)); clearInterval(interval.current)}}>
          <ChevronLeftIcon />
        </button>
        {content}
        <button className='next'
          onClick={() => {setCurrent((x) => x + (x < children.length - 1)); clearInterval(interval.current)}}>
          <ChevronRightIcon />
        </button>
      </div>
      {buttons}
    </div>
  )
}