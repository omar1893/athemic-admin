import { defineStore } from 'pinia'

export const useSellerStore = defineStore('seller', {
  state: () => ({
    seller: null as null | Record<string, any>,
  }),
  actions: {
    setSeller(seller: any) {
      this.seller = seller
    },
    clearSeller() {
      this.seller = null
    }
  },
}) 