import { useState } from "react";
import { NaturalPersonForm } from "./NaturalPersonForm";
import { LegalPersonForm } from "./LegalPersonForm";
 
export const PersonalInformationForm = ({ handleComplete }) => {
  const [typePerson, setTypePerson] = useState("natural");

  const handleChangeTypePerson = (event) => {
    setTypePerson(event.target.value);
  };
  

  return (
    <>
      <div className="container">
        <h1 className="text-center fw-bolder text-dark-blue">
            Queremos conocerte mejor
        </h1>
      </div>
      <div className="container col-12 col-md-10 pt-4">
        <div className="bg-white rounded-4 d-flex align-items-center justify-content-between px-2 py-3 mt-2 mb-3">
          <select className="w-100 border-0 bg-transparent grey-dark focus-none fs-5" onChange={handleChangeTypePerson}>
            <option className="grey-dark" value="" disabled>
                Tipo de persona
            </option>
            <option className="grey-dark" value="natural">
                Natural
            </option>
            <option className="grey-dark" value="juridica">
                Juridica
            </option>
          </select>        
        </div>
        {
          typePerson === "natural" 
          ? <NaturalPersonForm handleComplete={handleComplete} /> 
          : <LegalPersonForm handleComplete={handleComplete}/>
        }     
      </div>
    </>
  );
};
