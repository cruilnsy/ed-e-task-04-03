
import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/core'
import Main from './components/Main'


// import { jsx } from '@emotion/core'

function App() {
    return (
        <Flex h="100vh" align="center" bgColor="#f1f1f1">
            <Box position="absolute" left="50px" top="50px">
                <Image w="70%" src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" />
            </Box>
            <Main />
        </Flex>
    )
}

export default App