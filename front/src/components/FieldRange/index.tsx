/* eslint-disable no-unused-vars */
// Vendors

// Components
import { useState } from "react"
import { Range, getTrackBackground } from "react-range"
import { useTheme } from "styled-components"
import formatCurrency from "utils/formatCurrency"

import * as S from "./styles"

// Types
type Values = number[]

export type FieldRangeProps = {
  values: Values
  minValue: number
  maxValue: number
  step?: number
  rtl?: boolean
  showThumbValue?: boolean
  onChange: (values: Values) => void
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const FieldRange = (props: FieldRangeProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {
    values,
    minValue = 0,
    maxValue = 100,
    step,
    rtl,
    showThumbValue = true,
    onChange
  } = props

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */

  const {
    colors: { principal }
  } = useTheme()

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Effects
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Memos
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <S.Container>
      <Range
        values={values}
        step={step}
        min={minValue}
        max={maxValue}
        rtl={rtl}
        onChange={onChange}
        renderTrack={({ props, children }) => (
          <S.Tracker
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style
            }}
          >
            <S.TrackerLine
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values,
                  colors: ["#DEDEE3", principal, "#DEDEE3"],
                  min: minValue,
                  max: maxValue,
                  rtl
                })
              }}
            >
              {children}
            </S.TrackerLine>
          </S.Tracker>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <S.Thumb {...props}>
            {showThumbValue && (
              <S.ThumbValue>
                {formatCurrency(values[index], {
                  maximumFractionDigits: 0
                })}
              </S.ThumbValue>
            )}

            <div
              style={{
                height: "8px",
                width: "10px",
                backgroundColor: isDragged ? principal : "#DEDEE3"
              }}
            />
          </S.Thumb>
        )}
      />
    </S.Container>
  )
}
