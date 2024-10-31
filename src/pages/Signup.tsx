import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../componts/common/Button';
import { Link } from 'react-router-dom';

interface FormItem {
  itemno: number;
  label: string;
  type: string;
  placeholder: string;
  buttonname: string;
}

const form: FormItem[] = [
  { itemno: 1, label: "What is your name?", type: "text", placeholder: "Enter your name", buttonname: "Next" },
  { itemno: 2, label: "What is your age?", type: "number", placeholder: "Enter your age", buttonname: "Continue" },
  { itemno: 3, label: "What is your email?", type: "email", placeholder: "Enter your email", buttonname: "Next" },
  { itemno: 4, label: "Set your password", type: "password", placeholder: "Enter your password", buttonname: "Next" },
  { itemno: 5, label: "Enter OTP", type: "text", placeholder: "Enter OTP sent to your email", buttonname: "Next" },
  { itemno: 6, label: "What is your gender?", type: "select", placeholder: "", buttonname: "Submit" },
];

interface FormValues {
  name?: string;
  age?: number;
  email?: string;
  password?: string;
  otp?: string;
  gender?: string;
}

const Signup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { register, handleSubmit, formState: { errors }, trigger } = useForm<FormValues>();

  const handleNext = async () => {
    const isValid = await trigger(form[currentStep].label.toLowerCase() as keyof FormValues);
    if (isValid) {
      if (currentStep < form.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        alert('🎉 Your account is created! Welcome aboard!');
      }
    }
  };

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log("Form Submitted:", data);
  };

  return (
    <section className="flex flex-col bg-[#121212] h-full w-full justify-center items-center overflow-hidden">
      <form onSubmit={handleSubmit(onSubmit)} className="h-1/2 w-1/2 md:w-1/2 flex flex-col space-y-4">
        <AnimatePresence>
          {form.map((item, index) => (
            index === currentStep && (
              <motion.div
                key={item.itemno}
                initial={{ opacity: 0, y: 100 - (index * 30) }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <label className="block text-2xl md:text-3xl lg:text-4xl text-orange-500 font-jaro mx-auto my-1">
                  {item.label}
                </label>

                {item.type === "select" ? (
                  <select
                    {...register("gender", { required: "Please select your gender" })}
                    className="block text-black font-jaro rounded-md w-[90%] px-2 py-1"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">♂️ Male</option>
                    <option value="Female">♀️ Female</option>
                    <option value="Other">⚥ Other</option>
                  </select>
                ) : (
                  <input
                    {...register(item.label.toLowerCase() as keyof FormValues, {
                      required: `Please enter your ${item.label.toLowerCase()}`,
                      ...(item.type === 'email' && {
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Please enter a valid email address.'
                        }
                      }),
                      ...(item.type === 'number' && {
                        min: {
                          value: 0,
                          message: 'Age must be a positive number.'
                        }
                      })
                    })}
                    className="block text-black font-jaro rounded-md w-[90%] px-2 py-1"
                    type={item.type}
                    placeholder={item.placeholder}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleNext();
                      }
                    }}
                  />
                )}

                {errors[item.label.toLowerCase() as keyof FormValues] && (
                  <span className="text-red-500 text-sm">
                    {errors[item.label.toLowerCase() as keyof FormValues]?.message}
                  </span>
                )}

                <Button
                  name={item.buttonname}
                  onclick={handleNext}
                  className="border-white border-solid border mx-16 font-jaro mt-3"
                  hoverClassName="bg-orange-500 mx-auto"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </form>
      <q className='text-orange-400 font-jaro text-sm md:text-xl'>Already have an account?<b><Link to="/login" className='text-orange-500 font-jaro underline'> Login</Link></b></q>
    </section>
  );
};

export default Signup;
