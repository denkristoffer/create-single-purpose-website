import { css } from "@emotion/react";

export default function Home() {
  return (
    <div
      css={css`
        align-items: center;
        display: flex;
        font-family: system-ui, sans-serif;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
      `}
    >
      Your content goes here
    </div>
  );
}
