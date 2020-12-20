import {
  clear,
  ac,
  ce,
  gameModes,
  operand,
  division,
  times,
  minus,
  plus,
  equal,
  integer,
  dot,
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
} from "./constants"

import { CgGames } from "react-icons/cg"

function createButton(value, type) {
  return {
    value,
    type,
  }
}

export const AC = createButton(ac, clear)
export const CE = createButton(ce, clear)
export const GAME_MODES = createButton(CgGames, gameModes)

// operands
export const DIVISION = createButton(division, operand)
export const TIMES = createButton(times, operand)
export const MINUS = createButton(minus, operand)
export const PLUS = createButton(plus, operand)
export const EQUAL = createButton(equal, operand)

// integers
export const ZERO = createButton(zero, integer)
export const ONE = createButton(one, integer)
export const TWO = createButton(two, integer)
export const THREE = createButton(three, integer)
export const FOUR = createButton(four, integer)
export const FIVE = createButton(five, integer)
export const SIX = createButton(six, integer)
export const SEVEN = createButton(seven, integer)
export const EIGHT = createButton(eight, integer)
export const NINE = createButton(nine, integer)

// doottt
export const DOT = createButton(dot, integer)
