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
}

const Stepper:React.FC<StepperProps>  = ({steps, current = 0}) => {
   if (steps.length === 0) {
      return <div className="text-center text-gray-500 border rounded-xl bg-gray-50 p-4">
         No steps defined
      </div>
   }

   return (
    <div className='stepper-container'>
       <div className='stepper-line'/>

       <div className='d-flex justify-center'>
          {steps.map((step, index) => {
             const active = index === current;
             return (
                 <div key={index} className='d-flex flex-column align-center stepper-item__wrapper'>
                    <div className={`stepper-item ${active ? "stepper-active__item" : ""}`}>
                       <Typography variant='h4' className='text-medium-secondary form-text stepper-item-text'>
                          {index + 1}
                       </Typography>
                    </div>
                    <div className='stepper-item-label'>
                       <Typography variant='h4' className='text-small form-text stepper-item-text'>
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