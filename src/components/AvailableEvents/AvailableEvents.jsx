import { useState, useEffect } from "react";
import axios from "axios";
import { CardEvents } from './CardEvents'

export const AvailableEvents = () => {

    const [events, setEvents] = useState([]);
    const [visibleEvents, setVisibleEvents] = useState(8);
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
        setVisibleEvents((prevVisibleEvents) => prevVisibleEvents + 8);
        setLoading(false);
    };

  return (
    <>
        <div className="container-fluid bg-grey-light pt-4">
            <div className="container py-4">
                <div className='text-dark-blue text-center w-100'>
                    <h2 className='fw-bolder text-title-principal'>
                        EVENTOS DISPONIBLES
                    </h2>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut vel ex corrupti odit voluptas autem cupiditate error amet aliquid. Alias error facere fugiat doloribus veritatis animi laboriosam commodi similique delectus magnam autem fuga, obcaecati nemo illo cum officiis ducimus consequuntur voluptates molestias! Optio ullam soluta culpa magni et quis?
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
