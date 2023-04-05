import React from 'react';
import { useForm } from 'react-hook-form';
import Progress from '../../components/steps/Progress';
import { useRouter } from "next/router";

export default function SecondStep(props:any) {
    const router = useRouter();
    const { user } = props;
    const {register, handleSubmit, formState: { errors },} = useForm();
    const onSubmit = (data:any) => {
        console.log(data);
        //props.updateUser(data);
        //props.history.push('/steps/thirdstep');
        router.push('/steps/thirdstep');
    };

  return (
    <div>
        <h1>Multi Step Registration</h1>
        <Progress />
        <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <div className="form-label">Email</div>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    autoComplete="off"
                    {...register('user_email', { required: true})}
                    className={`${errors.user_email ? 'form-control input-error' : 'form-control'}`}
                />
                {errors.user_email && (
                    <p className="errorMsg">Email field is required.</p>
                )}
            </div>
            <div className="form-group">
                <div className="form-label">Password</div>
                <input
                    type="password"
                    placeholder="Choose a password"
                    autoComplete="off"
                    {...register('user_password', { required: true})}
                    className={`${errors.user_password ? 'form-control input-error' : 'form-control'}`}
                />
                {errors.user_password && (
                    <p className="errorMsg">Password field is required.</p>
                )}
            </div>
            <button type="submit">
            Next
            </button>
        </form>
    </div>
  );
};