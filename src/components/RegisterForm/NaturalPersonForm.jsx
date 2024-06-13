import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import ModalTerms from "./ModalTerms";
import * as Yup from "yup";

export const NaturalPersonForm = ( {handleComplete} ) => {
  const [departments, setDepartments] = useState([]);
  const [cities, setCities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/colombia.min.json");
        setDepartments(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const handleDepartmentChange = (event) => {
    const selectedDepartment = event.target.value;
    const selectedCities =
      departments.find((dep) => dep.departamento === selectedDepartment)
        ?.ciudades || [];
    setCities(selectedCities);
  };

  const handleCheckboxClick = (setFieldValue) => {
    if (!isTermsAccepted) {
      setIsModalOpen(true);
    } else {
      setIsTermsAccepted(false);
      setFieldValue("autorizacionDatos", false);
    }
  };

  const handleAcceptTerms = (setFieldValue) => {
    setIsTermsAccepted(true);
    setFieldValue("autorizacionDatos", true);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values, errors) => {
    console.log(values, errors);
    handleComplete();
  };

  const initialValues = {
    nombres: "",
    apellidos: "",
    tipoDocumento: "CC",
    numeroIdentificacion: "",
    fechaExpedicionDocumento: "",
    fechaNacimiento: "",
    departamento: "",
    ciudad: "",
    celular: "",
    autorizacionDatos: false,
  };

  const validationSchemas = Yup.object({
    nombres: Yup.string().required('Nombres son requeridos'),
    apellidos: Yup.string().required('Apellidos son requeridos'),
    fechaNacimiento: Yup.date().required('Fecha de nacimiento es requerida').nullable(),
    tipoDocumento: Yup.string().required('Tipo de documento es requerido'),
    numeroIdentificacion: Yup.string().required('Número de identificación es requerido'),
    fechaExpedicionDocumento: Yup.date().required('Fecha de expedición del documento es requerida').nullable(),
    celular: Yup.string().required('Número de celular es requerido').matches(/^[0-9]+$/, 'Número de celular inválido').min(10, 'El número debe tener al menos 10 dígitos').max(10, 'El número debe tener máximo 10 dígitos'),
    departamento: Yup.string().required('Departamento es requerido'),
    ciudad: Yup.string().required('Ciudad es requerida'),
    autorizacionDatos: Yup.boolean().oneOf([true], 'Autorización de datos es requerida'),
  })

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemas}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ values, handleChange, setFieldValue }) => (
            <Form className="pb-4">
            <>
                <div className="row">
                <div className="col-12 col-md-6">
                    <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="text"
                    name="nombres"
                    placeholder="Nombres"
                    />
                </div>
                <div className="col-12 col-md-6">
                    <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="text"
                    name="apellidos"
                    placeholder="Apellidos"
                    />
                </div>
                </div>
                <div className="row">
                <div className="col-12 col-md-6">
                    <div className="row">
                    <div className="col-3 col-md-3 pe-1">
                        <Field
                        as="select"
                        className="w-100 text-center py-3 px-3 fs-5 border-0 rounded-end rounded-4 grey-dark bg-white mb-3"
                        name="tipoDocumento"
                        >
                          <option className="grey-dark" value="CC">
                              CC
                          </option>
                          <option className="grey-dark" value="CE">
                              CE
                          </option>
                          <option className="grey-dark" value="Pasaporte">
                              Pasaporte
                          </option>
                        </Field>
                    </div>
                    <div className="col-9 col-md-9 ps-1">
                        <Field
                        className="w-100 py-3 px-3 fs-5 border-0 rounded-start rounded-4 grey-dark bg-white mb-3"
                        type="text"
                        name="numeroIdentificacion"
                        placeholder="Número de identificación"
                        />
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="text"
                    onFocus={(e) => (e.currentTarget.type = "date")}
                    name="fechaExpedicionDocumento"
                    placeholder="Fecha de expedición del documento"
                    />
                </div>
                </div>
                <div className="row">
                <div className="col-12 col-md-6">
                    <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="text"
                    onFocus={(e) => (e.currentTarget.type = "date")}
                    name="fechaNacimiento"
                    placeholder="Fecha de nacimiento"
                    />
                </div>
                <div className="col-12 col-md-6">
                    <Field
                    as="select"
                    className="w-100 py-3 px-3 fs-5 border-0 rounded-4 grey-dark bg-white mb-3"
                    name="departamento"
                    onChange={(e) => {
                        handleChange(e);
                        handleDepartmentChange(e);
                    }}
                    >
                    <option className="grey-dark" value="" disabled>
                        Departamento
                    </option>
                    {departments.map((department) => (
                        <option
                        className="grey-dark"
                        key={department.id}
                        value={department.departamento}
                        >
                        {department.departamento}
                        </option>
                    ))}
                    </Field>
                </div>
                </div>
                <div className="row">
                <div className="col-12 col-md-6">
                    <Field
                    as="select"
                    className="w-100 py-3 px-3 fs-5 border-0 rounded-4 grey-dark bg-white mb-3"
                    name="ciudad"
                    >
                    <option className="grey-dark" value="" disabled>
                        Ciudad
                    </option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                        {city}
                        </option>
                    ))}
                    </Field>
                </div>
                <div className="col-12 col-md-6">
                    <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="text"
                    name="celular"
                    placeholder="Número de celular"
                    />
                </div>
                </div>
            </>
                <div className="fs-5 text-center mt-2 d-flex justify-content-center align-items-center flex-column">
                    <div>
                        <Field
                        type="checkbox"
                        name="autorizacionDatos"
                        id="autorizacion-datos"
                        checked={isTermsAccepted}
                        onClick={() => handleCheckboxClick(setFieldValue)}
                        />
                        <label
                        className="ms-2 fs-5 text-dark cursor-pointer"
                        htmlFor="autorizacion-datos"
                        >
                        Autorización de datos y consultas en centrales
                        </label>
                    </div>
                </div>
                <div className="col-6 mx-auto">
                    <button type="submit" className="button-blue fs-5 w-100 mt-4">
                        Continuar
                    </button>
                </div>
                <ModalTerms
                    isOpen={isModalOpen}
                    onAccept={() => handleAcceptTerms(setFieldValue)}
                    onClose={handleCloseModal}
                />
                <ErrorMessage name="nombres" component="div" className="alert alert-danger" />
                <ErrorMessage name="apellidos" component="div" className="alert alert-danger" />
                <ErrorMessage name="fechaNacimiento" component="div" className="alert alert-danger" />
                <ErrorMessage name="tipoDocumento" component="div" className="alert alert-danger" />
                <ErrorMessage name="numeroIdentificacion" component="div" className="alert alert-danger" />                
                <ErrorMessage name="fechaExpedicionDocumento" component="div" className="alert alert-danger" />
                <ErrorMessage name="celular" component="div" className="alert alert-danger" />
                <ErrorMessage name="departamento" component="div" className="alert alert-danger" />
                <ErrorMessage name="ciudad" component="div" className="alert alert-danger" />
                <ErrorMessage name="autorizacionDatos" component="div" className="alert alert-danger" />
            </Form>
        )}
      </Formik>
    </>
  );
};
