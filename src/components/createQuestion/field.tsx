import { Checkbox, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { HTMLInputTypeAttribute, SelectHTMLAttributes } from 'react';

export function FieldComponent({
	errors,
	name,
	register,
	placeholder,
	title,
	required = true,
	requiredMessage = `Field ${name} is required`,
	inputType = 'text',
	validate
}: {
	errors?: any;
	name: string;
	placeholder?: string;
	title: string;
	required?: boolean;
	requiredMessage?: string;
	inputType?: HTMLInputTypeAttribute | SelectHTMLAttributes<HTMLSelectElement>;
	register: (...data: any) => any;
	validate?: any;
}) {
	let options = {};
	if (required) {
		options['required'] = requiredMessage;
	}
	if (validate) {
		options['validate'] = validate;
	}
	let FieldType = ({ type }: { type?: HTMLInputTypeAttribute }) => {
		if (type == 'checkbox') {
			return (
				<Checkbox
					type='checkbox'
					name={name}
					placeholder={placeholder || name}
					{...register(name, { required: required && requiredMessage, validate })}
				/>
			);
		}
		return <Input name={name} placeholder={placeholder || name} {...register(name, options)} />;
	};
	return (
		<FormControl isInvalid={errors[name]}>
			{console.log({ errors })}
			<FormLabel htmlFor={name}>{title}</FormLabel>
			<FieldType />
			<FormErrorMessage>{errors[name] && errors[name].message}</FormErrorMessage>
		</FormControl>
	);
}
