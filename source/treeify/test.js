/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
// import {describe, it} from "mocha"
// import {expect} from "chai"
//
// import treeify from "./"
//
// describe("treeify()", () => {
//   context("given a fully qualified data", () => {
//     const raw = [
//       {
//         namespace: "accounts",
//         version: "v1",
//         intent: "list",
//         request: () => null,
//       },
//       {
//         namespace: "accounts",
//         version: "v1",
//         intent: "show",
//         request: () => null,
//       },
//       {
//         namespace: "accounts",
//         version: "v2",
//         intent: "show",
//         request: () => null,
//       },
//       {
//         namespace: "sessions",
//         version: "v2",
//         intent: "create",
//         request: () => null,
//       },
//     ]
//
//     it("has a show property for v1/accounts", () => {
//       expect(treeify(raw)).to.have.deep.property("accounts.v1.show").that.is.instanceOf(Function)
//     })
//
//     it("has a list property for v1/accounts", () => {
//       expect(treeify(raw)).to.have.deep.property("accounts.v1.list").that.is.instanceOf(Function)
//     })
//
//     it("has a show property for v2/accounts", () => {
//       expect(treeify(raw)).to.have.deep.property("accounts.v2.show").that.is.instanceOf(Function)
//     })
//
//     it("has a show property for v1/sessions", () => {
//       expect(treeify(raw)).to.have.deep.property("sessions.v2.create").that.is.instanceOf(Function)
//     })
//   })
// })
