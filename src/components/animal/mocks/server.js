import { setupServer } from "msw/node"
import { rest } from "msw"

export default setupServer(
  rest.get("http://codebangkok.com:5000/africa/animals", (req, res, ctx) => {

    const searchText = req.url.searchParams.get("search")

    if (searchText && searchText == "zebra") {
      return res(
        ctx.json(
          [
            {
              id: "zebra",
              name: "Zebra",
              headline: "This is zebra",
              image: "zebra",
              gallery: ["zebra-1"]
            }
          ]
        )
      )
    }

    return res(
      ctx.json(
        [
          {
            id: "lion",
            name: "Lion",
            headline: "This is lion",
            image: "lion",
            gallery: ["lion-1"]
          },
          {
            id: "zebra",
            name: "Zebra",
            headline: "This is zebra",
            image: "zebra",
            gallery: ["zebra-1"]
          }
        ]
      )
    )
  })
)
