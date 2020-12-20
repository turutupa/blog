import { atom } from "recoil"

const defaultValue = "0"

export const userInputAtom = atom({
  key: "userInput",
  default: "234567",
})
