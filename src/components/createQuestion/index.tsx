import { Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { BASE_URL } from '../../constants/url';
import { FieldComponent } from './field';

export function CreateQuestionComponent() {
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
	const onSubmit = (data: any) => console.log({ data });
	const isValid = async (props: { [key: string]: string }) => {
		let key = Object.keys(props)[0];
		let res = await fetch(`${BASE_URL}/question/isvalid?${key}=${props[key]}`);
		await res.json();
		console.log({ res });
		// return result;
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FieldComponent
				name={'title'}
				title={'Title'}
				validate={(e: any) => isValid({ title: e })}
				register={register}
				errors={errors}
			/>
			<FieldComponent name={'description'} title={'Description'} register={register} errors={errors} />
			<FieldComponent name={'question'} title={'Question'} register={register} errors={errors} />
			<FieldComponent
				name={'level'}
				title={'Level'}
				placeholder={'EASY,MEDIUM OR HARD'}
				// validate={(e) => isValid({ title: e })}
				register={register}
				errors={errors}
			/>
			<FieldComponent name={'type'} title={'Type of options'} register={register} errors={errors} />
			<FieldComponent name={'element-type'} title={'Element Type'} register={register} errors={errors} />
			<FieldComponent name={'element-name'} title={'Element Name'} register={register} errors={errors} />
			<FieldComponent name={'element-title'} title={'Element Title'} register={register} errors={errors} />
			<FieldComponent name={'element-choices'} title={'Element Choices'} register={register} errors={errors} />
			<FieldComponent
				name={'element-choices'}
				title={'Element Correct Answer'}
				register={register}
				errors={errors}
			/>
			<Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
				Submit
			</Button>
		</form>
	);
}
