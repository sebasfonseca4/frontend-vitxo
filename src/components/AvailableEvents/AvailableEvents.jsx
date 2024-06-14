import { useState, useEffect } from "react";
import axios from "axios";
import { CardEvents } from './CardEvents'

export const AvailableEvents = () => {

    const [events, setEvents] = useState([]);
    const [visibleEvents, setVisibleEvents] = useState(12);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "https://654ff546358230d8f0cdd1a1.mockapi.io/events"
            );
            setEvents(response.data);
          } catch (error) {
          }
        };
        fetchData();
      }, []);

      
    const loadMoreEvents = () => {        
        setLoading(true);
        setVisibleEvents((prevVisibleEvents) => prevVisibleEvents + 12);
        setLoading(false);
    };

  return (
    <>
        <div className="container-fluid bg-grey-light pt-4">
            <div className="container py-4" id="avaliable-events">
                <div className='text-dark-blue text-center w-100'>
                    <h2 className='fw-bolder text-title-principal'>
                        EVENTOS DISPONIBLES
                    </h2>
                    <p className=''>
                        ¡No te pierdas los emocionantes eventos que tenemos preparados para ti! Aquí te dejamos una lista con todas las actividades que podrás disfrutar.
                    </p>
                </div>
                <div className="row pt-3">
                    <CardEvents events={events.slice(0, visibleEvents)}/>
                </div>
                <div className='mt-4 mb-3 d-flex justify-content-center '>
                    {
                        loading ?
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        :
                        <button className='button-blue col-6 col-md-3' onClick={loadMoreEvents}>
                            Ver más
                        </button>
                    }
                </div>
            </div>
        </div>
    </>
  )
}
