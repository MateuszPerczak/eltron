import { css, Global, type Theme, useTheme } from "@emotion/react";
import { memo } from "react";

const GlobalStyle = (): JSX.Element => {
  const { background, color }: Theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: "Outfit", sans-serif;
        }
        html,
        body {
          height: 100%;
          scroll-behavior: smooth;
        }
        body {
          display: flex;
          flex-direction: column;
          background: ${background};
          color: ${color};
          overflow: hidden;
          user-select: none;
        }
        #root {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
