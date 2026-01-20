import { style } from "@vanilla-extract/css";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140">
  <filter id="n">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.85"
      numOctaves="3"
      stitchTiles="stitch"
    />
  </filter>
  <rect
    width="140"
    height="140"
    filter="url(#n)"
    opacity="0.8"
  />
</svg>
`;

const encodedSvg = encodeURIComponent(svg)
  .replace(/%0A/g, "")
  .replace(/%20/g, " ");

const url = `data:image/svg+xml,${encodedSvg}`;


export const footerGrain = style({
  position: "relative",
  overflow: "hidden",

  "::before": {
    content: "",
    position: "absolute",
    inset: 0,
    pointerEvents: "none",

    backgroundImage: `url("${url}")`,
    opacity: 0.045,
    mixBlendMode: "soft-light",
    transform: "translateZ(0)",
  },
});

