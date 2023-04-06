import React from 'react';
import { useForm } from 'react-hook-form';
import Progress from '../../components/Steps/Progress';
import { useRouter } from "next/router";
export default function FirstStep (props:any) {
    const router = useRouter();
    const { user } = props;
    //const { register, handleSubmit, errors } = useForm({
        /*defaultValues: {
        first_name: user.first_name,
        last_name: user.last_name
        }*/
    //});
    const {register, handleSubmit, formState: { errors },} = useForm();
    const onSubmit = (data:any) => {
        console.log(data);
        router.push('/steps/secondstep');
        //props.updateUser(data);
        //props.history.push('/steps/secondstep');

    };
    return (
        <div>
            <h1>Multi Step Registration</h1>
            <Progress />
            <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                <div className="form-label">First Name</div>
                <input
                    type="text"
                    placeholder="Enter your first name"
                    autoComplete="off"
                    {...register('first_name', { required: true})}
                    className={`${errors.first_name ? 'form-control input-error' : 'form-control'}`}
                />
                {errors.first_name && (
                    <p className="errorMsg">FirstName field is required.</p>
                )}
                </div>

                <div className="form-group">
                <div className="form-label">Last Name</div>
                <input
                    type="text"
                    placeholder="Enter your last name"
                    autoComplete="off"
                    {...register('last_name', { required: true})}
                    className={`${errors.last_name ? 'form-control input-error' : 'form-control'}`}
                />
                {errors.last_name && (
                    <p className="errorMsg">LastName field is required.</p>
                )}
                </div>

                <button type="submit">
                Next
                </button>
            </form>
        </div>
    );
};