import "@emotion/react";

type Hex = `#${string}`;

declare module "@emotion/react" {
  export interface Theme {
    background: Hex;
    color: Hex;
  }
}
