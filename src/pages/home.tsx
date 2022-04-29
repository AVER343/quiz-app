import React, { useEffect } from 'react';
import Head from 'next/head';

interface IProps {
	question: string;
	options: string[];
	selected: any[];
}
function HomePage(props) {
	return (
		<React.Fragment>
			<Head>
				<title>HomePage</title>
			</Head>
		</React.Fragment>
	);
}
export async function getServerSideProps(context) {
	return {
		props: {}
	};
}
export default HomePage;
