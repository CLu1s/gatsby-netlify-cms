import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Roboto",
      styles: ["300","400"],
    },
    {
      name: "Lato",
      styles: ["400", "700"],
    },
  ],
  headerFontFamily: [
    "Lato",
  ],
  bodyFontFamily: ["Roboto"],
})

export default typography