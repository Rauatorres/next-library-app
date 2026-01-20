import Form from 'next/form';

type FormContainerProps = {
    children: React.ReactNode
}

const FormContainer = ({ children }: FormContainerProps) => {
    return (
        <Form className="
            bg-white
            w-[40vw]
            mx-auto
            mt-40
            p-10
            rounded-md
            shadow-md
        " action={''}>
            {children}
        </Form>
    );
};

export default FormContainer