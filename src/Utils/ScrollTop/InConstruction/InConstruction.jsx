import ImgInConstruction from '../../../assets/images/img-in-construction.png'

export const InConstruction = () => {
  return (
    <>
        <div className="container py-5">
            <h2 className="text-center fw-bolder text-dark-blue">
                En construcción
            </h2>
            <img className='mx-auto d-flex mt-5' src={ImgInConstruction} alt="En construcción" />
        </div>
    </>
  )
}
