// You can name the return value of `defineStore()` anything you want, but it's best to use the name of the store and surround it with `use` and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
//

interface State {
  userList: UserInfo[]
  user: UserInfo | null
}

export const useStore = defineStore('main', {
  state: (): State => {
    return {
      // for initially empty lists
      userList: [] as UserInfo[],
      // for data that is not yet loaded
      user: null as UserInfo | null,
    }
  },
})

interface UserInfo {
  name: string
  age: number
}