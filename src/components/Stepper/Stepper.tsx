import React from "react";
import "./Stepper.css";
import Typography from "../Typography/Typography.tsx";

type Step = {
   label: string;
   id: number;
}

interface StepperProps {
   steps: Step[];
   current?: number;
   onStepClick: (index: number) => void
}


// const Stepper:React.FC<StepperProps>  = ({steps, current = 0, onStepClick}) => {
const Stepper:React.FC<StepperProps>  = ({steps, current = 0,}) => {
   if (steps.length === 0) {
      return <div className="text-center text-gray-500 border rounded-xl bg-gray-50 p-4">
         No steps defined
      </div>
   }
   const safeCurrent = Math.min(Math.max(current, 0), steps.length - 1);

   return (
    <div className='stepper-container'>
       <div className='stepper-line'/>

       <div className='d-flex justify-center'>
          {steps.map((step, index) => {
             const active = index === safeCurrent;
             return (
                 <div key={index} className='d-flex flex-column align-center stepper-item__wrapper'>
                    <div className={active ? 'stepper-active__item stepper-item': 'stepper-item'}>
                       <Typography variant='h4' className='text-medium-secondary form-text stepper-item-text'>
                          {index + 1}
                       </Typography>
                    </div>
                    <div className='stepper-item-label'>
                       <Typography variant='h4' className={`${active ? "stepper-item__active-text" : "color-grey" }text-small form-text stepper-item-text`}>
                          {step.label}
                       </Typography>
                    </div>
                 </div>
             )
          })}
       </div>

    </div>
   )
}

export default Stepper;