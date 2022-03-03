import { assign, createMachine } from "xstate";

createMachine(
  {
    tsTypes: {} as import("./cat-machine.typegen").Typegen0,
    id: "CAT",
    schema: {
      context: {} as { catImage: string },
      events: {} as { type: "CAT.CAT_PRESSED" } | { type: "CAT.CLOSED" },
      services: {} as {
        fetchCat: { data: string };
      },
    },
    context: {
      catImage: null,
    },
    states: {
      A: {
        on: {
          "CAT.CAT_PRESSED": {
            target: "B",
          },
        },
      },
      B: {
        invoke: {
          id: "fetch-cat",
          src: "fetchCat",
          onDone: {
            target: "D",
            actions: "updateCatImage",
          },
          onError: {
            target: "C",
          },
        },
      },
      C: {
        on: {
          "CAT.CAT_PRESSED": {
            target: "B",
          },
        },
      },
      D: {
        on: {
          "CAT.CLOSED": {
            target: "A",
          },
        },
      },
    },
    initial: "A",
  },
  {
    services: {
      fetchCat: async () => {
        return "https://cataas.com/cat/5be36902cfff09000f685f4e";
      },
    },
    actions: {
      updateCatImage: assign((context, event) => {
        return {
          ...context,
          catImage: event.data,
        };
      }),
    },
  }
);
