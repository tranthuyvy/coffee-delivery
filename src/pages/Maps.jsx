import GoogleMapReact from "google-map-react";
import PropTypes from 'prop-types';
import { address } from "../apis/mock-data";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { useEffect, useState } from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>

AnyReactComponent.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

const Maps = () => {
  const coords = { lat: 10.839164883639125, lng: 106.7888975913999 };
  const [locations, setLocations] = useState([]);
  const newLocations = [];

  const defaultProps = {
    center: {
      lat: 10.839164883639125,
      lng: 106.7888975913999
    },
    zoom: 15
  };

  const fetchLocations = async () => {

    for (const addr of address) {

      try {
        const results = await geocodeByAddress(addr.address);
        const { lat, lng } = await getLatLng(results[0]);
        newLocations.push({ id: addr.id, lat, lng });
      } catch (error) {
        console.error(`Error geocoding address ${addr.address}:`, error);
      }
    }
    setLocations(newLocations);
    console.log("Locations:", newLocations);
  };

  useEffect(() => {
    fetchLocations();
  }, [locations]);



  return (
    <>
      <section className="relative items-center justify-center bg-white pt-16">
        <div className="relative w-full">
          <div className="py-[30px] px-7 lg:px-14 md:py-14 w-full">
            <h1 className="text-center font-RobotoSemibold text-[#111b19] text-3xl md:text-3xl xl:text-[3rem] mb-5 sm:mt-5 md:leading-tight">
              Các Chi Nhánh Highlands Coffee
            </h1>
            <div className="ml-[450px] relative">
              <div className="w-1/2 border-b-[0px] sm:border-b-[1px] sm:border border-[#6A717C]"></div>
              <div className="absolute top-[-1px] w-[15%] border-b-[0px] sm:border-b-[2px] sm:border-[#FF5256]"></div>
            </div>

          </div>
        </div>
        <div className="flex">
          <div className="flex flex-[25%] justify-center font-RobotoSemibold uppercase">
            Danh Sách Cửa Hàng ({locations.length})
            {locations.map((loc) => (
              <div key={loc.id}>
                <p>{loc.id}</p>
                <p>{loc.lat}</p>
                <p>{loc.lng}</p>
              </div>

            ))}
          </div>

          <div className="flex-[75%] w-[500px] h-[500px]">
            <GoogleMapReact
              bootstrapURLKeys={{ key: import.meta.env.VITE_MAPS_KEY }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              center={coords}
            >
              {locations.map((loc) => (
                <AnyReactComponent
                  key={loc.id}
                  lat={loc.lat}
                  lng={loc.lng}
                  text={
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/wed-invitation-790a1.appspot.com/o/marker.png?alt=media&token=c40a4631-1f07-48f8-81b3-5b24dd58d197"
                      alt="marker-ic"
                      className="w-[30px] h-[30px]"
                    />
                  }
                />
              ))}
            </GoogleMapReact>
          </div>
        </div>

      </section>
    </>
  )
}

export default Maps
