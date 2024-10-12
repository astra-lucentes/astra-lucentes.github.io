'use client'

import "./CopyButton.css"
import {memo, useEffect, useRef, useState} from "react"
import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react"

import {CopyIcon} from "@/kit/Icons"
import {DismissIcon, OkIcon} from "../Icons"

const CopyButton = memo(({text}) => {
  const [status, setStatus] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef(null)

  const {refs, floatingStyles, context} = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "top",
    middleware: [offset(10), flip(), shift(), arrow({element: arrowRef})],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(context, {move: false})
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, {role: "tooltip"})

  const {getReferenceProps, getFloatingProps} = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ])

  const onClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setStatus(1)
        setTimeout(() => setStatus(0), 500)
      })
      .catch((error) => {
        setStatus(-1)
        setTimeout(() => setStatus(0), 750)
      })
  }

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className="copy-button"
        onClick={onClick}
      >
        <CopyIcon color="var(--interface)" size={1} />
      </button>
      {isOpen && (
        <>
          <div
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              ...(status !== 0
                ? {
                    color: "white",
                    background: `var(--${status === 1 ? "success" : "error"}`,
                  }
                : {}),
            }}
            className="tooltip"
            {...getFloatingProps()}
          >
            {status === 0 ? (
              <>Скопировать</>
            ) : status === 1 ? (
              <>
                <OkIcon size={1.25} /> Скопировано
              </>
            ) : (
              <>
                <DismissIcon size={1.25} /> Не получилось
              </>
            )}
            <FloatingArrow
              ref={arrowRef}
              context={context}
              fill={`var(--${
                status === 0
                  ? "tooltip-background"
                  : status === 1
                  ? "success"
                  : "error"
              }`}
            />
          </div>
        </>
      )}
    </>
  )
})

export default CopyButton
