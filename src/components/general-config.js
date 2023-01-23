import { typography } from "./typography"
import { color } from "./colors"

export const menu =  {
    typography: typography.menuPosition,
    backgroundColor: [color.black, color.black],
    color: [color.white, color.white],
    colorHover: [color.red40, color.red40],
    fontBackgroundColor: [color.white, color.blue100],
    borderBottom: [ ``, `1px solid ${color.neutral20}`],
    hamburgerColor: [color.white, color.white],
    navigationColor: [color.red00, color.blue40],
    textTransform: "",
}

export const topHeader = {
    size: 2,
    typography: [typography.h900, typography.h600, typography.h500],
    color: color.white,
    secondaryColor: color.white,
    upperline: false,
    underline: false,
    lineHeight: "1px",
    lineWidth: "100%",
    lineColor: color.neutral40,
    textTransform: "",
    padding: "0 0 8px",
    margin: "",
    position: "relative",
}

export const header = {
    size: 2,
    typography: [typography.h900, typography.h600, typography.h500],
    color: color.white,
    secondaryColor: color.white,
    upperline: false,
    underline: true,
    lineHeight: "1px",
    lineWidth: "100%",
    lineColor: color.neutral40,
    textTransform: "uppercase",
    padding: "0 0 8px",
    margin: "",
    position: "relative",
}

export const text = {
    typography: typography.bodyM,
    linkTypography: typography.button,
    textTransform: "",
}

export const link = {
    typography: typography.menuPosition,
    textTransform: "",
    textDecoration: "none",
    transition: "color 0.3s ease"
}

export const button = {
    typography: typography.buttonXS,
    typographyXXS: typography.buttonS,
    typographyXS: typography.button,
    width: "",
    height: "",
    backgroundColor: [color.red40, color.black],
    color: color.white,
    textTransform: "",
    position: "relative",
}

export const footer = {
    typography: typography.bodyS,
    backgroundColor: color.red00,
    color: color.white,
}