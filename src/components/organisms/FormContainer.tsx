import Form from 'next/form';

type FormContainerProps = {
    children: React.ReactNode
}

const FormContainer = ({ children }: FormContainerProps) => {
    return (
        <Form action={''}>
            {children}
        </Form>
    );
};

export default FormContainer