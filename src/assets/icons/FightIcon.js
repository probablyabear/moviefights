import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 64 64"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M 15 2 C 12.800781 2 11 3.800781 11 6 C 11 8.199219 12.800781 10 15 10 C 17.199219 10 19 8.199219 19 6 C 19 3.800781 17.199219 2 15 2 Z M 41 3 C 38.800781 3 37 4.800781 37 7 C 37 9.199219 38.800781 11 41 11 C 43.199219 11 45 9.199219 45 7 C 45 4.800781 43.199219 3 41 3 Z M 31.0625 7.9375 C 30.914063 7.945313 30.742188 7.960938 30.59375 8 L 11.90625 12.1875 C 10.804688 12.386719 9.894531 13.011719 9.09375 13.8125 L 3.3125 20.1875 C 2.511719 21.085938 2.304688 22.398438 2.90625 23.5 C 3.605469 24.800781 5.101563 25.3125 6.5 24.8125 L 8 24.1875 L 12.1875 22.5 C 13.289063 22.101563 13.898438 20.789063 13.5 19.6875 C 13.300781 19.085938 12.914063 18.707031 12.3125 18.40625 C 12.011719 18.304688 11.707031 18.1875 11.40625 18.1875 C 11.105469 18.1875 10.792969 18.304688 10.59375 18.40625 L 9.1875 18.90625 L 8.90625 18.90625 C 8.40625 18.90625 7.90625 18.507813 7.90625 17.90625 C 7.90625 17.507813 8.195313 17.101563 8.59375 17 L 10 16.40625 C 10.5 16.207031 10.992188 16.09375 11.59375 16.09375 C 12.195313 16.09375 12.8125 16.199219 13.3125 16.5 C 14.414063 17 15.199219 17.804688 15.5 18.90625 C 16.300781 21.007813 15.195313 23.386719 13.09375 24.1875 L 8.09375 26.1875 L 8.09375 34.40625 L 5.09375 44.40625 C 4.695313 45.804688 5.414063 47.1875 6.8125 47.6875 C 7.511719 47.886719 8.210938 47.894531 8.8125 47.59375 C 9.414063 47.292969 9.894531 46.699219 10.09375 46 L 12.90625 36.5 L 13.3125 30.09375 L 16.09375 35.8125 L 16.09375 45.5 C 16.09375 46.898438 17.195313 48 18.59375 48 C 19.992188 48 21.09375 46.898438 21.09375 45.5 L 21.09375 35.3125 C 21.09375 34.710938 21.011719 34.1875 20.8125 33.6875 L 17.5 23.8125 L 19.59375 15.6875 L 31.8125 12.59375 C 32.414063 12.394531 32.886719 12.007813 33.1875 11.40625 C 33.488281 10.804688 33.605469 10.195313 33.40625 9.59375 C 33.054688 8.542969 32.101563 7.886719 31.0625 7.9375 Z M 37.34375 12.25 C 36.085938 12.246094 34.882813 12.675781 33.90625 13.5 L 28.09375 18.59375 L 22.1875 19.90625 C 20.988281 20.207031 20.199219 21.394531 20.5 22.59375 C 20.800781 23.792969 21.894531 24.613281 23.09375 24.3125 L 29.1875 23.09375 C 29.289063 23.09375 29.304688 23.101563 29.40625 23 L 33.6875 20.3125 L 31.40625 27.40625 L 27.40625 33.40625 C 27.007813 33.90625 26.789063 34.492188 26.6875 35.09375 L 25 45.1875 C 24.800781 46.488281 25.605469 47.707031 26.90625 47.90625 L 27.40625 47.90625 C 27.90625 47.90625 28.414063 47.800781 28.8125 47.5 C 29.3125 47.101563 29.710938 46.605469 29.8125 45.90625 L 31.59375 36.8125 L 36.09375 31 L 40.1875 46 C 40.386719 46.699219 40.804688 47.195313 41.40625 47.59375 C 42.007813 47.894531 42.707031 48.011719 43.40625 47.8125 C 44.707031 47.414063 45.488281 45.988281 45.1875 44.6875 L 41.3125 30 L 41.5 29.09375 C 41.199219 28.992188 40.988281 28.792969 40.6875 28.59375 L 37.59375 26.1875 C 36.695313 25.488281 36.199219 24.507813 36 23.40625 C 35.898438 22.304688 36.207031 21.210938 36.90625 20.3125 C 37.707031 19.3125 38.886719 18.6875 40.1875 18.6875 C 41.085938 18.6875 41.988281 19 42.6875 19.5 L 43.90625 20.40625 C 44.105469 20.605469 44.1875 20.792969 44.1875 21.09375 C 44.1875 21.695313 43.789063 22.09375 43.1875 22.09375 C 42.988281 22.09375 42.789063 22.007813 42.6875 21.90625 L 41.5 21 C 41.101563 20.699219 40.6875 20.59375 40.1875 20.59375 C 39.585938 20.59375 38.898438 20.90625 38.5 21.40625 C 38.101563 21.90625 38 22.398438 38 23 C 38.101563 23.601563 38.414063 24.105469 38.8125 24.40625 L 41.90625 26.8125 C 42.007813 26.914063 42.207031 26.992188 42.40625 27.09375 C 42.507813 27.09375 42.492188 27.1875 42.59375 27.1875 C 42.695313 27.1875 42.804688 27.3125 42.90625 27.3125 C 43.007813 27.3125 42.992188 27.304688 43.09375 27.40625 C 43.195313 27.40625 43.304688 27.398438 43.40625 27.5 L 43.90625 27.5 C 44.40625 27.5 44.914063 27.394531 45.3125 27.09375 C 45.613281 26.894531 45.792969 26.800781 46.09375 26.5 C 46.792969 25.699219 47.113281 24.695313 46.8125 23.59375 L 45.3125 16.90625 C 44.8125 15.105469 43.394531 13.6875 41.59375 13.1875 L 38.59375 12.40625 C 38.167969 12.304688 37.761719 12.25 37.34375 12.25 Z " />
  </svg>
);

export default SVG;
