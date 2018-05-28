import btoa from "btoa"
import authenticate from "./"

test("basic", () => {
  expect(authenticate({
    scheme: "basic",
    shared: "aaa",
    secret: "bbb",
  })).toEqual({Authorization: `Basic ${btoa("aaa:bbb")}`})
})
test("bearer", () => {
  expect(authenticate({
    scheme: "bearer",
    secret: "bbb",
  })).toEqual({Authorization: `Bearer ${btoa("bbb")}`})
})
test("unknown", () => {
  expect(authenticate({scheme: "boop"})).toEqual({})
})
