import btoa from "btoa"
import basic from "./"

test("it works", () => {
  expect(basic({
    shared: "aaa",
    secret: "bbb",
  })).toEqual({Authorization: `Basic ${btoa("aaa:bbb")}`})
})
