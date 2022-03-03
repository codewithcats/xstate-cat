// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    updateCatImage: "done.invoke.fetch-cat";
  };
  internalEvents: {
    "done.invoke.fetch-cat": {
      type: "done.invoke.fetch-cat";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "xstate.init": { type: "xstate.init" };
    "error.platform.fetch-cat": {
      type: "error.platform.fetch-cat";
      data: unknown;
    };
  };
  invokeSrcNameMap: {
    fetchCat: "done.invoke.fetch-cat";
  };
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    fetchCat: "CAT.CAT_PRESSED";
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: "A" | "B" | "C" | "D";
  tags: never;
}
