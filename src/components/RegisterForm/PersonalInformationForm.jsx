import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import ModalTerms from "./ModalTerms";

export const PersonalInformationForm = ({ handleComplete }) => {
  const [typePerson, setTypePerson] = useState("natural");
  const [departments, setDepartments] = useState([]);
  const [cities, setCities] = useState([]);
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleChangeTypePerson = (event) => {
    setErrors({});
    setTypePerson(event.target.value);
  };

  const validate = (values) => {
    const newErrors = {};

    if (!values.typePerson) {
      newErrors.typePerson = "Tipo de persona es requerido";
    }
    if (typePerson === "natural") {
      if (!values.nombresApellidos) {
        newErrors.nombresApellidos = "Nombres y Apellidos son requeridos";
      }
      if (!values.fechaNacimiento) {
        newErrors.fechaNacimiento = "Fecha de nacimiento es requerida";
      }
    } else if (typePerson === "juridica") {
      if (!values.razonSocial) {
        newErrors.razonSocial = "Razón social es requerida";
      }
      if (!values.representanteLegal) {
        newErrors.representanteLegal = "Representante legal es requerido";
      }
      if (!values.fechaNacimientoRepresentante) {
        newErrors.fechaNacimientoRepresentante =
          "Fecha de nacimiento del representante es requerida";
      }
    }
    if (!values.numeroIdentificacion) {
      newErrors.numeroIdentificacion = "Número de identificación es requerido";
    }
    if (!values.celular) {
      newErrors.celular = "Número de celular es requerido";
    }
    if (!values.departamento) {
      newErrors.departamento = "Departamento es requerido";
    }
    if (!values.ciudad) {
      newErrors.ciudad = "Ciudad es requerida";
    }
    if (!values.direccion) {
      newErrors.direccion = "Dirección es requerida";
    }
    if (!values.autorizacionDatos) {
      newErrors.autorizacionDatos = "Autorización de datos es requerida";
    }
    setErrors(newErrors);
    return newErrors;
  };

  useEffect(() => {
    setErrors({});
  }, [typePerson]);

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

  const handleSubmit = (values) => {
    console.log(errors);
    handleComplete();
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center fw-bolder text-dark-blue">
            Queremos conocerte mejor
        </h1>
      </div>
      <div className="container col-12 col-md-10">
        <Formik
            initialValues={{
            typePerson: "",
            nombresApellidos: "",
            fechaNacimiento: "",
            numeroIdentificacion: "",
            razonSocial: "",
            representanteLegal: "",
            fechaNacimientoRepresentante: "",
            celular: "",
            departamento: "",
            ciudad: "",
            direccion: "",
            autorizacionDatos: false,
            }}
            validate={validate}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange, setFieldValue }) => (
            <Form className="py-4">
                <Field
                as="select"
                className="w-100 py-3 px-3 fs-5 border-0 rounded-4 grey-dark bg-white mb-3"
                name="typePerson"
                onChange={(e) => {
                    handleChange(e);
                    handleChangeTypePerson(e);
                }}
                >
                <option className="grey-dark" value="" disabled>
                    Tipo de persona
                </option>
                <option className="grey-dark" value="natural">
                    Natural
                </option>
                <option className="grey-dark" value="juridica">
                    Juridica
                </option>
                </Field>
                <ErrorMessage
                name="typePerson"
                component="div"
                className="text-danger"
                />

                {typePerson === "natural" && (
                <>
                    <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="text"
                    name="nombresApellidos"
                    placeholder="Nombres y Apellidos"
                    />
                    <ErrorMessage
                    name="nombresApellidos"
                    component="div"
                    className="text-danger"
                    />
                    <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="date"
                    name="fechaNacimiento"
                    placeholder="Fecha de nacimiento"
                    />
                    <ErrorMessage
                    name="fechaNacimiento"
                    component="div"
                    className="text-danger"
                    />
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
                        <option className="grey-dark" value="NIT">
                            NIT
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
                        <ErrorMessage
                        name="numeroIdentificacion"
                        component="div"
                        className="text-danger"
                        />
                    </div>
                    </div>
                </>
                )}

                {typePerson === "juridica" && (
                <>
                    <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="text"
                    name="razonSocial"
                    placeholder="Razón social"
                    />
                    <ErrorMessage
                    name="razonSocial"
                    component="div"
                    className="text-danger"
                    />
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
                        name="numeroDocumento"
                        placeholder="Número de documento"
                        />
                        <ErrorMessage
                        name="numeroDocumento"
                        component="div"
                        className="text-danger"
                        />
                    </div>
                    </div>
                    <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="text"
                    name="representanteLegal"
                    placeholder="Nombres y Apellidos - Representante legal"
                    />
                    <ErrorMessage
                    name="representanteLegal"
                    component="div"
                    className="text-danger"
                    />
                    <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="date"
                    name="fechaNacimientoRepresentante"
                    placeholder="Fecha de nacimiento"
                    />
                    <ErrorMessage
                    name="fechaNacimientoRepresentante"
                    component="div"
                    className="text-danger"
                    />
                </>
                )}

                <Field
                className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                type="text"
                name="celular"
                placeholder="Número de celular"
                />
                <ErrorMessage
                name="celular"
                component="div"
                className="text-danger"
                />
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
                <ErrorMessage
                name="departamento"
                component="div"
                className="text-danger"
                />
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
                <ErrorMessage
                name="ciudad"
                component="div"
                className="text-danger"
                />
                <Field
                className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                type="text"
                name="direccion"
                placeholder="Dirección"
                />
                <ErrorMessage
                name="direccion"
                component="div"
                className="text-danger"
                />
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
                <ErrorMessage
                    name="autorizacionDatos"
                    component="div"
                    className="text-danger"
                />
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
            </Form>
            )}
        </Formik>

      </div>
    </>
  );
};
