import { injectGlobal } from 'styled-components'
import { colors } from './constant'

injectGlobal`
html {
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  color: ${colors.black};
}

* {
  box-sizing: border-box;
}

input,
textarea {
  font-family: 'Raleway', sans-serif;
  outline: none;
  font-size: 13px;
}

textarea {
  resize: none;
}

body {
  background: #fafafa;
  max-width: 1000px;
  min-width: 300px;
  margin: 0 auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 5px 0;
}

p {
  line-height: 20px;
}
a,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
}
`
