import { createGlobalStyle } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css'


export default createGlobalStyle`
:root{
  --primary: #FFC700;
  --secondary: #195AAB;
  --neutral-strong: #353546;
  --neutral-stronger: #23242f;
  --neutral-strongest: #13141b;
  --neutral-medium: #8f8f9a;
  --neutral-smooth: #caced4;
  --neutral-smoother: #e7eaee;
  --neutral-smoothest: #ffffff;
  --feedback-success: #0fef83;
  --feedback-info: #57D6F8;
  --feedback-positive: #86ffc5;
  --feedback-warning: #f0960f;
  --feedback-negative: #e66f87;
  --feedback-error: #d30d48;
  --font-family-roboto: "Roboto",sans-serif;
  --font-family-montserrat: "Montserrat",sans-serif;
  --font-size-small: 1.2rem;
  --font-size-default: 1.6rem;
  --font-size-huge: 1.8rem;
  --font-size-tiny: 2.4rem;
  --spacing-small: 1rem;
  --spacing-default: 1.2rem;
  --spacing-vertical: 1.2rem 0;
  --spacing-horizontal: 0 1.2rem;
  --spacing-huge: 2.4rem;
  --spacing-tiny: 3rem;

  --type-grass: #00ff08;
  --type-bug: #52b936;
  --type-electric: #f6fb00;
  --type-fighting: #cb0000;
  --type-fire: #ff8400;
  --type-ground: #946300;
  --type-rock: #8d8e66;
  --type-normal: #848484;
  --type-poison: #9d00ff;
  --type-ghost: #692096;
  --type-psychic: #cc6df5;
  --type-fairy: #e2adf9;
  --type-flying: #a1e5f6;
  --type-ice: #4adbff;
  --type-water: #00bfff;
  --type-dragon: #006eff;
  --type-dark: #2c343f;
  --type-steel: #565d66;

}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
html {
  font-size: 62.5%; /* 1rem = 10px */
  height: 100%;
}
body {
  font-family: var(--font-family-roboto);
  font-weight: 400;
  background: var(--neutral-strongest);
  color: var(--neutral-strong);
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale;
  font-size: var(--font-size-default);
}
body, input, button {
  font-size: var(--font-size-default);
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;
}
`;