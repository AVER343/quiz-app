import { Fade, Modal, ModalContent, ModalOverlay, Slide, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import LoginComponent from './login';
import SignUpComponent from './signup';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
function CredentialComponent(props: any) {
	let [ isLogin, setIsLogin ] = useState(true);
	const [ cookies, setCookie ] = useCookies([ 'JWT' ]);
	return (
			<Modal isOpen={props.isOpen} onClose={props.onClose}>
				<ModalOverlay />
				<ModalContent>
					{isLogin && <LoginComponent setIsLogin={setIsLogin} />}
					{!isLogin && <SignUpComponent setIsLogin={setIsLogin} />}
				</ModalContent>
			</Modal>
	);
}

export default CredentialComponent;
