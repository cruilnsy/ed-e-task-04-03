import React from 'react'
import { Box, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/core'

import SignUp from './SignUp'
import SignIn from './SignIn'

import { css } from '@emotion/core'

const style = css`
    border-radius: 4px;
    width: 400px;
    margin: 0 auto;
    padding: 50px 30px;
    box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    background-color: #fff;
`

export default function Main () {
    return (
        <Box css={style}>
            <Tabs isFitted w="100%">
                <TabList>
                    <Tab _focus={{ boxShadow: "none" }}>登录</Tab>
                    <Tab _focus={{ boxShadow: "none" }}>注册</Tab>
                </TabList>
                <TabPanels px="0">
                    <TabPanel px="0">
                        <SignIn />
                    </TabPanel>
                    <TabPanel px="0">
                        <SignUp />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}