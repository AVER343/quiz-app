import { CircularProgress } from '@chakra-ui/react';
import { ReactNode } from 'react';

export function IsLoadingComponent({ isLoading, children }:any) {
	if (isLoading) {
		return <CircularProgress isIndeterminate color='green.300' />;
	}
	return children;
}
