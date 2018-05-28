import objectTree from "./"

test("it works", () => {
  expect(
    objectTree(
      new Map([
        [
          "aaa",
          new Map([
            [
              "bbb",
              new Map([
                [
                  "ccc",
                  "1",
                ],
              ]),
            ],
          ]),
        ],
      ])
    )
  ).toEqual(
    {aaa: {bbb: {ccc: "1"}}}
  )
})
