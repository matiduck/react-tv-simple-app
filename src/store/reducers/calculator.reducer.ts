import * as calculatorAction from '../actions/calculator.actions'
import { ActionType, getType } from 'typesafe-actions'

type CalculatorActions = ActionType<typeof calculatorAction>

interface State {
  total: number
}

const initialState: State = {
  total: 0,
}

export const calculator = (
  state: State = initialState,
  action: CalculatorActions,
): State => {
  switch (action.type) {
    case getType(calculatorAction.calculatorAdd):
      return { ...state, total: state.total + action.payload.value }
    case getType(calculatorAction.calculatorRemove):
      return { ...state, total: state.total - action.payload.value }
    default:
      return state
  }
}
