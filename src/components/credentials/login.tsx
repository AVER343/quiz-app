import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
	HStack,
	InputGroup,
	InputLeftAddon,
	cookieStorageManager
} from '@chakra-ui/react';
import { getCookieParser } from 'next/dist/server/api-utils';

import { useForm, SubmitHandler } from 'react-hook-form';
import {ChatIcon,LockIcon,LinkIcon} from '@chakra-ui/icons'
import { BASE_URL } from '../../constants/url';
import { _axios } from '../../lib/axios';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
interface IFormInputs {
	user_name: string;
	password: string;
}

export default function LoginComponent({ setIsLogin }:any) {
	const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
		try {
			let res_data = await _axios.post('/users/login', { username: data.user_name, password: data.password });
			localStorage.setItem('user',JSON.stringify(res_data.data))
		} catch (e:any) {
			console.log(e?.message);
		}
	};

	const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
	return (
		<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
			<Stack align={'center'}>
				<Heading fontSize={'4xl'}>Sign in to your account</Heading>
				<Text fontSize={'lg'} color={'gray.600'}>
					to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
				</Text>
			</Stack>
			<Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} p={8}>
				<Stack spacing={4}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormControl id='user_name' isRequired isInvalid={!!errors.user_name}>
							<FormLabel>Email</FormLabel>
							<InputGroup>
								<InputLeftAddon children={<ChatIcon />} />
								<Input type='text' {...register('user_name', { required: true })} />
							</InputGroup>
						</FormControl>

						<FormControl id='password' isRequired isInvalid={!!errors.password}>
							<FormLabel>Password</FormLabel>
							<InputGroup>
								<InputLeftAddon children={<LockIcon />} />
								<Input type='password' {...register('password', { required: true })} />
							</InputGroup>
						</FormControl>
						<Stack spacing={10}>
							<Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
								<Checkbox>Remember me</Checkbox>
								<Link color={'blue.400'}>Forgot password?</Link>
							</Stack>
							<Button
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500'
								}}
								type='submit'
							>
								Login
							</Button>
						</Stack>
					</form>
					<Stack pt={6}>
						<Text align={'center'}>
							Don't have an account?{' '}
							<Link color={'blue.400'} onClick={() => setIsLogin(false)}>
								Signup
							</Link>
						</Text>
					</Stack>
				</Stack>
			</Box>
		</Stack>
	);
}
