import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import ModalTerms from "./ModalTerms";
import * as Yup from "yup";

export const LegalPersonForm = ({ handleComplete }) => {
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
    razonSocial: "",
    numeroDocumentoRazonSocial: "",
    representanteLegal: "",
    tipoDocumentoRepresentanteLegal: "CC",
    numeroIdentificacionRepresentanteLegal: "",
    fechaNacimientoJuridica: "",
    celularJuridica: "",
    departamentoJuridica: "",
    ciudadJuridica: "",
    autorizacionDatosJuridica: false,
  };

  const validationSchemas = Yup.object({
    razonSocial: Yup.string().required('Razon social son requeridos'),
    numeroDocumentoRazonSocial: Yup.string().required('numeroDocumentoRazonSocial son requeridos'),
    representanteLegal: Yup.string().required('representanteLegal son requeridos'),
    tipoDocumentoRepresentanteLegal: Yup.string().required('Tipo de documento es requerido'),
    numeroIdentificacionRepresentanteLegal: Yup.string().required('Número de identificación es requerido'),
    fechaNacimientoJuridica: Yup.date().required('Fecha de nacimiento es requerida').nullable(),
    celularJuridica: Yup.string().required('Número de celular es requerido').matches(/^[0-9]+$/, 'Número de celular inválido').min(10, 'El número debe tener al menos 10 dígitos').max(10, 'El número debe tener máximo 10 dígitos'),
    departamentoJuridica: Yup.string().required('Departamento es requerido'),
    ciudadJuridica: Yup.string().required('Ciudad es requerida'),    
    autorizacionDatosJuridica: Yup.boolean().oneOf([true], 'Autorización de datos es requerida'),
  });

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
                    name="razonSocial"
                    placeholder="Razón social"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-3 col-md-3 pe-1">
                      <label
                        className="w-100 py-3 px-3 fs-5 border-0 rounded-end rounded-4 text-dark bg-white fw-semibold text-center mb-3"
                        htmlFor="nit"
                      >
                        NIT
                      </label>
                    </div>
                    <div className="col-9 col-md-9 ps-1">
                      <Field
                        className="w-100 py-3 px-3 fs-5 border-0 rounded-start rounded-4 grey-dark bg-white mb-3"
                        type="text"
                        name="numeroDocumentoRazonSocial"
                        placeholder="Número de documento"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="text"
                    name="representanteLegal"
                    placeholder="Nombres y Apellidos - Representante legal"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-3 col-md-3 pe-1">
                      <Field
                        as="select"
                        className="w-100 text-center py-3 px-3 fs-5 border-0 rounded-end rounded-4 grey-dark bg-white mb-3"
                        name="tipoDocumentoRepresentanteLegal"
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
                        name="numeroIdentificacionRepresentanteLegal"
                        placeholder="Número de identificación"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="text"
                    onFocus={(e) => (e.currentTarget.type = "date")}
                    name="fechaNacimientoJuridica"
                    placeholder="Fecha de nacimiento"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="text"
                    name="celularJuridica"
                    placeholder="Número de celular"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <Field
                    as="select"
                    className="w-100 py-3 px-3 fs-5 border-0 rounded-4 grey-dark bg-white mb-3"
                    name="departamentoJuridica"
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
                <div className="col-12 col-md-6">
                  <Field
                    as="select"
                    className="w-100 py-3 px-3 fs-5 border-0 rounded-4 grey-dark bg-white mb-3"
                    name="ciudadJuridica"
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
              </div>
            </>
            <div className="fs-5 text-center mt-2 d-flex justify-content-center align-items-center flex-column">
              <div>
                <Field
                  type="checkbox"
                  name="autorizacionDatosJuridica"
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
            <ErrorMessage
              name="razonSocial"
              component="div"
              className="alert alert-danger"
            />
            <ErrorMessage
              name="numeroDocumentoRazonSocial"
              component="div"
              className="alert alert-danger"
            />
            <ErrorMessage
              name="representanteLegal"
              component="div"
              className="alert alert-danger"
            />
            <ErrorMessage
              name="tipoDocumentoRepresentanteLegal"
              component="div"
              className="alert alert-danger"
            />
            <ErrorMessage
              name="numeroIdentificacionRepresentanteLegal"
              component="div"
              className="alert alert-danger"
            />
            <ErrorMessage
              name="fechaNacimientoJuridica"
              component="div"
              className="alert alert-danger"
            />
            <ErrorMessage
              name="celularJuridica"
              component="div"
              className="alert alert-danger"
            />
            <ErrorMessage
              name="departamentoJuridica"
              component="div"
              className="alert alert-danger"
            />
            <ErrorMessage
              name="ciudadJuridica"
              component="div"
              className="alert alert-danger"
            />
            <ErrorMessage
              name="autorizacionDatosJuridica"
              component="div"
              className="alert alert-danger"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};
