import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import theme from '@chakra-ui/theme'
import { ChakraProvider, CSSReset } from '@chakra-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'

console.log(theme)

ReactDOM.render(
    <Router>
        <ChakraProvider theme={theme}>
            <CSSReset />
            <App />
        </ChakraProvider>
    </Router>,
    document.getElementById("root")
)