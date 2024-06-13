import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { PersonalInformationForm } from '../../components/RegisterForm/PersonalInformationForm';
import { InConstruction } from '../../Utils/ScrollTop/InConstruction/InConstruction';


const PlaceholderComponent = ({ text }) => <div>{text}</div>;

export const CreateAccount = () => {
  const steps = ['Información personal', 'Identidad', 'Información Bancaria', 'Evento'];

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    window.scrollTo(0,0);
    setActiveStep(newActiveStep);
  };
  
  const handleStep = (step) => () => {
    window.scrollTo(0,0);
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <PersonalInformationForm handleComplete={handleComplete} />;
      case 1:
        return <InConstruction/>;
      case 2:
        return <PlaceholderComponent text="Formulario de Información Bancaria aquí" />;
      case 3:
        return <PlaceholderComponent text="Detalle del Evento aquí" />;
      default:
        return "Paso desconocido";
    }
  };

  return (
    <>
      <div className="container pt-5 text-vitxo bg-grey-medium my-5 rounded-4">
        <div className="col-12 col-md-8 mx-auto">
          <Stepper alternativeLabel activeStep={activeStep} className='text-vitxo'>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className="py-5">
          {
            getStepContent(activeStep)
          }
        </div>
      </div>
    </>
  );
};