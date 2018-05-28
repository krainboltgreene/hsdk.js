import btoa from "btoa"
import bearer from "./"

test("it works", () => {
  expect(bearer({secret: "bbb"})).toEqual({Authorization: `Bearer ${btoa("bbb")}`})
})
