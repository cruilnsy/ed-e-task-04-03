import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import {
    InputGroup,
    Input,
    InputLeftElement,
    Box,
    Button,
    Text,
    Flex,
    FormControl
} from '@chakra-ui/core'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { signUp } from '../utils/services'

import Wechat from '../assets/wechat.svg'
import QQ from '../assets/qq.svg'

import { EmotionSocialText, EmotionSocialLogo } from './EmotionCss'

export default function SignUp () {
    const [error, setError] = useState('')
    const initialValues = { username: '', email: '', password: ''}
    const onSubmit = async (values) => {
        const data = {
            user: values
        }
        console.log('val: ', values)

        const res = await signUp(data).catch(error => {
            setError(error.message)
        })
        window.alert(res.data.user.username + ' @ ' + res.data.user.updatedAt)
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
        <Form>
            <Box py="4" px="0">
                <Field name="username">
                    {({ field }) => (
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement pt="1rem" children={<FaUserAlt color="#969696" />} />
                            <Input
                                {...field}
                                placeholder="你的昵称"
                                pl="2.5rem"
                                py="0.9rem"
                                borderBottomRadius="0"
                                borderBottomStyle="none"
                                bgColor="hsla(0,0%,71%,.1)"
                                focusBorderColor="none"
                                id="username"
                            />
                        </InputGroup>
                    </FormControl>
                    )}
                </Field>
                <Field name="email">
                    {({ field }) => (
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement pt="1rem" children={<FaLock color="#969696" />} />
                            <Input
                                {...field}
                                type="email"
                                placeholder="手机号或邮箱"
                                pl="2.5rem"
                                py="0.9rem"
                                borderRadius="0"
                                borderBottomStyle="none"
                                bgColor="hsla(0,0%,71%,.1)"
                                focusBorderColor="none"
                                id="email"
                            />
                        </InputGroup>
                    </FormControl>
                    )}
                </Field>
                <Field name="password">
                    {({ field }) => (
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement pt="1rem" children={<FaLock color="#969696" />} />
                            <Input 
                                {...field}
                                type="password"
                                placeholder="设置密码"
                                pl="2.5rem"
                                py="0.9rem"
                                borderTopRadius="0"
                                bgColor="hsla(0,0%,71%,.1)"
                                focusBorderColor="none"
                                id="password"
                            />
                        </InputGroup>
                    </FormControl>
                    )}
                </Field>
                <Text my="4" color="tomato">{error}</Text>
                <Button w="100%" my="4" bgColor="#42c02e" borderRadius="25px" color="white" type="submit">注册</Button>
                <Box>
                    <Text fontSize="0.8rem" textAlign="center">点击 “注册” 即表示您同意并愿意遵守简书<br />用户协议 和 隐私政策 。</Text>
                </Box>
                <Box my="4" >
                    <EmotionSocialText>社交帐号直接注册</EmotionSocialText>
                </Box>
                <Flex justify="space-around">
                    <EmotionSocialLogo src={Wechat} alt="wechat"></EmotionSocialLogo>
                    <EmotionSocialLogo src={QQ} alt="qq"></EmotionSocialLogo>
                </Flex>
            
        </Box>
    </Form>
    </Formik>
    )
}