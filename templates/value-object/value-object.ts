import { ValueObject, Result } from 'types-ddd';

interface Props {
	/** @todo define types from cli */
	value: any
}

/** @todo define value object name from cli */
export class MyValueObject extends ValueObject<Props>{
	private constructor(props: Props) {
		super(props)
	}

	/** @todo define getter return type from cli */
	get value(): any {
		return this.props.value;
	}

	public static isValidValue(value: any): boolean {
		// your logic to validate value here
		return value !== undefined;
	}

	public static create(value: any): Result<MyValueObject> {
		const isValid = MyValueObject.isValidValue(value);

		if (!isValid) {
			return Result.fail('your error message here');
		}

		return Result.ok(new MyValueObject({ value }));
	}
}

export default MyValueObject;
