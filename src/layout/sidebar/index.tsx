import React, { useEffect, useState } from 'react';
import { Flex, Text, IconButton, Divider, Avatar, Heading, useDisclosure, Button } from '@chakra-ui/react';
import { FiBookmark, FiMenu, FiHome, FiCalendar, FiUser, FiDollarSign, FiBriefcase, FiSettings } from 'react-icons/fi';
import { IoPawOutline } from 'react-icons/io5';
import NavItem from './NavItem';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import SignupCard from '../../components/credentials/login';
import CredentialComponent from '../../components/credentials';

export default function Sidebar(props: { navSize: string; changeNavSize: (nav: string) => void }) {
	let navItems: { href: string; title: string; description: string; icon: any }[] = [
		// { href: '/home', title: 'Dashboard', description: '', icon: FiHome },
		{ href: '/questions', title: 'Questions', description: '', icon: FiBookmark },
		// { href: '/report', title: 'Report', description: '', icon: FiBriefcase }
	];
	let [ active, setActive ] = useState<boolean[]>([]);
	let router = useRouter();

	const { isOpen, onOpen, onClose } = useDisclosure();
	let [ isLoggedIn, setIsLoggedIn ] = useState(false);
	useEffect(
		() => {
			navItems.map((e, index) => {
				if (router.pathname.indexOf(e.href) == 0) {
					setActive(navItems.map((e, i) => (i == index ? true : false)));
				}
			});
		},
		[ router.pathname ]
	);
	return (
		<Flex
			pos='sticky'
			left='0'
			h='100vh'
			boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
			borderRadius={props.navSize == 'small' ? '15px' : '30px'}
			w={props.navSize == 'small' ? '75px' : '200px'}
			flexDir='column'
			justifyContent='space-between'
		>
			<Flex
				p='5%'
				flexDir='column'
				w='100%'
				alignItems={props.navSize == 'small' ? 'center' : 'flex-start'}
				as='nav'
			>
				<IconButton
					background='none'
					mt={5}
					_hover={{ background: 'none' }}
					icon={<FiMenu />}
					onClick={() => {
						if (props.navSize == 'small') props.changeNavSize('large');
						else props.changeNavSize('small');
					}}
					aria-label={''}
				/>
				{navItems.map((e, index) => (
					<NavItem key={e.title} active={active[index]} navSize={props.navSize} {...e} />
				))}
			</Flex>

			<Flex
				p='5%'
				flexDir='column'
				w='100%'
				alignItems={props.navSize == 'small' ? 'center' : 'flex-start'}
				mb={4}
			>
				<Divider display={props.navSize == 'small' ? 'none' : 'flex'} />
				{!isLoggedIn ? (
					<Flex
						mt={4}
						align='center'
						onClick={() => {
							onOpen();
						}}
					>
						<Button>
							Login
							<CredentialComponent {...{ isOpen, onOpen, onClose }} />
						</Button>
					</Flex>
				) : (
					<Flex mt={4} align='center'>
						<Avatar size='sm' src='avatar-1.jpg' />
						<Flex flexDir='column' ml={4} display={props.navSize == 'small' ? 'none' : 'flex'}>
							<Heading as='h3' size='sm' />
							<Text color='gray'>Admin</Text>
						</Flex>
					</Flex>
				)}
			</Flex>
		</Flex>
	);
}
