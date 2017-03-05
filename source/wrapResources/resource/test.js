// import {describe, it} from "mocha"
// import {expect} from "chai"
//
// import subject from "./"
//
// describe("resource()", () => {
//   context(".request", () => {
//     const raw = {
//       id: "1",
//       attributes: {
//         intent: "list",
//         version: "v1",
//         namespace: "accounts",
//         verb: "GET",
//         href: "https://example.com/v1/accounts/{id}",
//         mediatype: "application/json",
//       },
//     }
//     const {request} = subject(raw)
//
//     it("returns a function", () => {
//       expect(request).to.be.an.instanceOf(Function)
//     })
//   })
//
//   context("with a missing id", () => {
//     const raw = {
//       attributes: {
//         intent: "list",
//         version: "v1",
//         namespace: "accounts",
//         verb: "GET",
//         href: "https://example.com/v1/accounts/{id}",
//         mediatype: "application/json",
//       },
//     }
//
//     it("has an error", () => {
//       expect(subject(raw)).to.have.deep.property("__abstraction__.errors.0", "idPresent")
//     })
//   })
//
//   context("with a missing intent", () => {
//     const raw = {
//       id: "1",
//       attributes: {
//         version: "v1",
//         namespace: "accounts",
//         verb: "GET",
//         href: "https://example.com/v1/accounts/{id}",
//         mediatype: "application/json",
//       },
//     }
//
//     it("has an error", () => {
//       expect(subject(raw)).to.have.deep.property("__abstraction__.errors.0", "intentPresent")
//     })
//   })
//
//   context("with a missing namespace", () => {
//     const raw = {
//       id: "1",
//       attributes: {
//         intent: "list",
//         verb: "GET",
//         href: "https://example.com/v1/accounts/{id}",
//         mediatype: "application/json",
//       },
//     }
//
//     it("has an error", () => {
//       expect(subject(raw)).to.have.deep.property("__abstraction__.errors.0", "namespacePresent")
//     })
//   })
//
//   context("with a missing verb", () => {
//     const raw = {
//       id: "1",
//       attributes: {
//         intent: "list",
//         version: "v1",
//         namespace: "accounts",
//         href: "https://example.com/v1/accounts/{id}",
//         mediatype: "application/json",
//       },
//     }
//
//     it("has an error", () => {
//       expect(subject(raw)).to.have.deep.property("__abstraction__.errors.0", "verbPresent")
//     })
//   })
//
//   context("with a missing href", () => {
//     const raw = {
//       id: "1",
//       attributes: {
//         intent: "list",
//         version: "v1",
//         namespace: "accounts",
//         verb: "GET",
//         mediatype: "application/json",
//       },
//     }
//
//     it("has an error", () => {
//       expect(subject(raw)).to.have.deep.property("__abstraction__.errors.0", "hrefPresent")
//     })
//   })
//
//   context("with a missing mediatype", () => {
//     const raw = {
//       id: "1",
//       attributes: {
//         intent: "list",
//         version: "v1",
//         namespace: "accounts",
//         verb: "GET",
//         href: "https://example.com/v1/accounts/{id}",
//       },
//     }
//
//     it("has an error", () => {
//       expect(subject(raw)).to.have.deep.property("__abstraction__.errors.0", "mediatypePresent")
//     })
//   })
// })
