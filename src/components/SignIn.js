import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import {
    Flex,
    InputGroup,
    Input,
    InputLeftElement,
    Checkbox,
    Select,
    Text,
    Box,
    Button,
    FormControl
} from '@chakra-ui/core'
import { FaUserAlt, FaLock, } from 'react-icons/fa'
import { signIn } from '../utils/services'

import Weibo from '../assets/weibo.svg'
import Wechat from '../assets/wechat.svg'
import QQ from '../assets/qq.svg'

import { EmotionSocialText, EmotionSocialLogo } from './EmotionCss'

export default function SignIn () {
    const [error, setError] = useState('')
    const initialValues = { email: '', password: ''}
    const onSubmit = async (values) => {
        const data = {
            user: {
                email: values.email,
                password: values.password
            }
        }
        const res = await signIn(data).catch(error => {
            setError(error.message)
        })
        console.log(res)
        window.alert(res.data.user.username + ' @ ' + res.data.user.updatedAt)
    }
    
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
        <Form>
            <Box py="4" px="0">
                <Field name="email">
                    {({ field }) => (
                        <FormControl>
                            <InputGroup>
                                <InputLeftElement pt="1rem" children={<FaUserAlt color="#969696" />} />
                                <Input
                                    {...field}
                                    placeholder="手机号或邮箱" 
                                    pl="2.5rem" 
                                    py="0.9rem" 
                                    borderBottomRadius="0" 
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
                                        placeholder="密码"
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
                <Flex justifyContent="space-between" my="4">
                    <Checkbox defaultIsChecked><Text>记住我</Text></Checkbox>
                    <Select placeholder="登陆遇到问题？" w="40" appearance="none" border="none">
                        <option value="option1">用手机号重置密码</option>
                        <option value="option2">用邮箱重置密码</option>
                        <option value="option3">无法用海外手机号登录</option>
                        <option value="option4">无法用 Google 帐号登录</option>
                    </Select>
                </Flex>
                <Text my="4" color="tomato">{error}</Text>
                <Button w="100%" bgColor="#3194d0" color="white" borderRadius="25px" type="submit">
                    登录
                </Button>
                <Box my="4">
                    <EmotionSocialText>社交账号登录</EmotionSocialText>
                </Box>
                <Flex justify="space-around">
                    <EmotionSocialLogo src={Weibo} alt="weibo"></EmotionSocialLogo>
                    <EmotionSocialLogo src={Wechat} alt="wechat"></EmotionSocialLogo>
                    <EmotionSocialLogo src={QQ} alt="qq"></EmotionSocialLogo>
                </Flex>
            </Box>
        </Form>
        </Formik>

    )
}