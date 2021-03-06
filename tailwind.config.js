module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FBD062",
          secondary: "#111430",
          accent: "#7AB259",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },

      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
