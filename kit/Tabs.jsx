"use client"

import React, {useState} from "react"

import './Tabs.css'

import {ToggleButton} from "./Buttons"

export const Tab = ({title, children}) => children

export const Tabs = ({children}) => {
    const [selected, setSelected] = useState(0)

    const buttons = (
        <div className="tab-list">
            {children.map((child, index) => (
                <ToggleButton
                    key={index}
                    selected={selected === index}
                    className={`tab`}
                    onClick={() => setSelected(index)}
                >
                    {child.props.title}
                </ToggleButton>
            ))}
        </div>
    )

    const content = (
        <div className="tab-container">{children[selected].props.children}</div>
    )

    return [buttons, content]
}

