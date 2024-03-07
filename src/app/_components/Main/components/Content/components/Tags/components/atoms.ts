import { atom } from 'jotai'

export const tagsAtom = atom<string[] | []>([])

export const setTagsAtom = atom(null, (get, set, newVal: string) => {
  const prevTags = get(tagsAtom)

  if (prevTags.length <= 5) {
    // idk why but includes expects a never type
    if (!prevTags.includes(newVal as never)) {
      set(tagsAtom, [...prevTags, newVal])
    }
  }
})

export const removeFromTagsAtom = atom(null, (get, set, newVal: string) => {
  set(
    tagsAtom,
    get(tagsAtom).filter((tag) => tag !== newVal),
  )
})
