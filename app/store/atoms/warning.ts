import { atom } from "recoil";


export const warningAtom = atom<boolean>({
    key: "warningAtom",
    default: true
})