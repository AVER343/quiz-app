import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ChakraProvider, HStack } from '@chakra-ui/react';
import { extendTheme, Box } from '@chakra-ui/react';
import { CYAN_THEME_COLOR } from '../constants/themes';
import Sidebar from '../layout/sidebar';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/global.css';
import router from 'next/router';
import Layout from '../layout';
export default function(props: AppProps) {
	const { Component, pageProps } = props;
	const { session, ...restPageProps } = pageProps;
	let colors = CYAN_THEME_COLOR;
	React.useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	const [ navSize, changeNavSize ] = useState('small');
	const theme = extendTheme({ colors });

	return (
			<ChakraProvider theme={theme}>
				<React.Fragment>
					<Head>
						<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
					</Head>
					<HStack alignItems='flex-start'>
						<Sidebar navSize={navSize} changeNavSize={changeNavSize} />
						<Box pt='10' ml={navSize == 'small' ? '75px' : '200px'} w='100vw'>
							<AnimatePresence>
								<Layout title={restPageProps.title} description={''}>
									<Component {...restPageProps} />
								</Layout>
							</AnimatePresence>
						</Box>
					</HStack>
				</React.Fragment>
			</ChakraProvider>
	);
}
