import { createStandardAction } from 'typesafe-actions'

export const calculatorAdd = createStandardAction('calc: add')<{
  value: number
}>()

export const calculatorRemove = createStandardAction('calc: remove')<{
  value: number
}>()
