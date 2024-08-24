import { atom, selector } from "recoil";
import { generateMnemonic } from "bip39";


export const warningAtom = atom<boolean>({
    key: "warningAtom",
    default: true
})


export const savedCheckAtom = atom<boolean>({
    key: "savedCheckAtom",
    default: true
})

export const mnemonicAtom  = atom<string[]>({
    key: "mnemonicAtom",
    default: selector({
        key: "mnemonicSelector",
        get: () => {
            const mnemonic = generateMnemonic();
            return mnemonic.split(" ");
        }
    })
})

export const copyAtom = atom<boolean>({
    key: "copyAtom",
    default: false
})