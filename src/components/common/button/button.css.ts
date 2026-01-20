import { style } from "@vanilla-extract/css";
import { colors } from "@/theme/colors"

export const main = style({
  borderRadius: "8px",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

export const primary = style({
  backgroundColor: colors.b3,
  color: colors.white,
  padding: "14px 24px",
  fontWeight: 500,
  height: "48px",
});

export const secondary = style({
  backgroundColor: "transparent",
  color: colors.b1,
  padding: "14px 24px",
  border: "1.5px solid",
  borderColor: colors.b3,
  selectors: {
    "&:hover": { backgroundColor: "#e5e7eb" },
    "&:active": { backgroundColor: "#d1d5db" },
  },
});

export const text = style({
  backgroundColor: "transparent",
  color: colors.b2,
  padding: "10px 16px",
  border: "none",
  borderRadius: 0,
});

export const link = style({
  backgroundColor: "transparent",
  color: colors.b2,
  padding: 0,
  border: "none",
  textDecoration: "underline",
  selectors: {
    "&:hover": { color: "#0056c7" },
    "&:active": { color: "#0045a3" },
  },
});

export const rounded = style({
  borderRadius: "32px",
  paddingInline: "32px",
});

export const disabled = style({
  opacity: 0.5,
  pointerEvents: "none",
  cursor: "not-allowed",
});