import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useRouter } from 'next/router';
// import { BsChevronRight } from 'react-icons/bs';
export function BreadCrumbComponent(props: { breadcrumbs: { href: string; title: string }[] }) {
	let router = useRouter();
	return (
		<Breadcrumb spacing={'8px'} color={'teal'} colorScheme={'cyan'} separator={'/'}>
			{props.breadcrumbs.map((e, index) => (
				<BreadcrumbItem key={index}>
					<BreadcrumbLink onClick={() => router.push(props.breadcrumbs[index].href)}>
						{e.title}
					</BreadcrumbLink>
				</BreadcrumbItem>
			))}
		</Breadcrumb>
	);
}
