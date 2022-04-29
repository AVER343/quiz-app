import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

type Props = {
	children: ReactNode;
	title: string;
	description: string;
};

const variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 }
};

const Layout = ({ children, title, description }: Props): JSX.Element => {
	let router = useRouter();
	return (
		<div>
			<NextSeo title={title} description={description} openGraph={{ title, description }} />
			<motion.div
				// variants={variants} // Pass the variant object into Framer Motion
				// initial='hidden' // Set the initial state to variants.hidden
				// animate='enter' // Animated state to variants.enter
				// exit='exit' // Exit state (used later) to variants.exit
				// transition={{ type: 'linear' }} // Set the transition to linear
				// className=''
				key={router.route}
				initial='initial'
				animate='animate'
				variants={{
					initial: {
						opacity: 0
					},
					animate: {
						opacity: 1
					}
				}}
			>
				{children}
			</motion.div>
		</div>
	);
};

export default Layout;
