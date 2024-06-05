export const CardEvents = ( { events }) => {

  return (
    <>
        {events.map(event => 
            <div className="col-12 col-md-4 col-lg-3 mb-3 "  key={event.id}>
                <div className="container bg-white p-3 shadow-sm rounded">
                    <div className="box-img-event-card mx-auto">
                        <img className="object-fit-cover w-100 h-100 rounded-3" src={event.imgEvent} alt="Imagen de evento" />
                    </div>
                    <h4 className="pt-3 text-dark fw-semibold mb-1 text-truncate">
                        { event.nameProduct }
                    </h4>
                    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar rounded bg-dark-blue" style={ { width: `${event.percentageSellEvent}%` } }>
                            {
                                event.percentageSellEvent > 30 
                                ? 
                                    <span className="fs-progressbar fw-bold">
                                        { event.percentageSellEvent }% Vendidos
                                    </span>
                                :
                                <span className="fs-progressbar fw-bold">
                                    { event.percentageSellEvent }%
                                </span>                           
                            }
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-6 d-flex flex-column text-start">
                            <span className="lh-1 mb-1 fw-semibold">
                                Precio
                            </span>
                            <span className="fw-bolder green-light text-fs-extra-large">
                                $ { Math.floor(event.priceEvent) }
                            </span>
                        </div>
                        <div className="col-6 d-flex flex-column text-end">
                            <span className="text-dark fw-bolder mb-0 lh-1 mb-1 text-truncate-event-card">
                                { event.nameEvent }
                            </span>
                            <span className="text-dark-blue fw-bolder lh-1 ">
                                +{ Math.floor(event.numberEventsCreate) }
                            </span>
                            <span className="lh-1 fw-semibold  text-dark-blue text-fs-medium">
                                Eventos creados
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}
