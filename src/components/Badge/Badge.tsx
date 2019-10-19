import React, { FC } from 'react'
import { BigRoot, Root } from './Badge.elements'

type Size = 'normal' | 'big'

interface Props {
  value: number
  size?: Size
}

type ComponentFactory = (value: number) => JSX.Element

const rootSizes: Record<Size, ComponentFactory> = {
  normal: value => <Root value={value}>{value}</Root>,
  big: value => <BigRoot value={value}>{value}</BigRoot>,
}

export const Badge: FC<Props> = ({ value, size = 'normal' }) =>
  rootSizes[size](value)
