import { SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useState } from 'react';

export enum Level {
	EASY = 'EASY',
	MEDIUM = 'MEDIUM',
	HARD = 'HARD'
}
export interface IReport {
	title: string;
	description?: string;
	numberOfQuestions: number;
	topics: any;
	level: Level;
}
function ReportPage() {
	let [ reports, setReports ] = useState<IReport[]>([]);
	return (
		<div>
			<Head>
				<title>Reports</title>
			</Head>
		</div>
	);
}

export async function getServerSideProps(context:any) {
	return {
		props: { } // will be passed to the page component as props
	};
}
export default ReportPage;
