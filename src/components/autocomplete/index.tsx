// import { Flex, useColorModeValue, Avatar, Text } from '@chakra-ui/react';
// import { AutoComplete, AutoCompleteInput, AutoCompleteList, AutoCompleteItem } from '@choc-ui/chakra-autocomplete';
// import { useEffect, useState } from 'react';
// import { BASE_URL } from '../../constants/url';
// export function AutoCompleteComponent() {
// 	let [ searched, setSearched ] = useState('');
// 	const [ searchList, setSearchList ] = useState<{ category: string; image: string; href?: string }[]>([
// 		{ category: 'Dan Abramov', image: 'https://bit.ly/dan-abramov' },
// 		{ category: 'Kent Dodds', image: 'https://bit.ly/kent-c-dodds' },
// 		{ category: 'Segun Adebayo', image: 'https://bit.ly/sage-adebayo' },
// 		{ category: 'Prosper Otemuyiwa', image: 'https://bit.ly/prosper-baba' },
// 		{ category: 'Ryan Florence', image: 'https://bit.ly/ryan-florence' }
// 	]);
// 	useEffect(
// 		() => {
// 			if (searched != '') {
// 				fetch(`${BASE_URL}/question/category/filter?category=${searched}`)
// 					.then((e) => e.json())
// 					.then((e) => setSearchList(e));
// 			}
// 		},
// 		[ searched ]
// 	);
// 	return (
// 		<AutoComplete rollNavigation style={{ position: 'fixed' }}>
// 			<AutoCompleteInput
// 				value={searched}
// 				onChange={(e) => setSearched(e.target.value)}
// 				variant='outline'
// 				placeholder='Search...'
// 				autoFocus
// 			/>
// 			<AutoCompleteList>
// 				{searchList.map(({ image, category }, oid) => (
// 					<AutoCompleteItem key={`option-${oid}`} value={category} textTransform='capitalize' align='center'>
// 						<Avatar size='sm' name={category} src={`/images/${category}.png`} />
// 						<Text ml='4'>{category}</Text>
// 					</AutoCompleteItem>
// 				))}
// 			</AutoCompleteList>
// 		</AutoComplete>
// 	);
// }

import React from 'react';

function index() {
	return <div />;
}

export default index;
