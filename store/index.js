import {
  HYEventStore
} from "hy-event-store"
export default new HYEventStore({
  state: {
    name: "why",
    friends: ["abc", "cba", "nba"],
    banners: [],
    recommends: []
  },
  actions: {
    getHomeMultidata(ctx) {
      ctx.banners = banner
      ctx.recommends = recommend
    }
  }
})