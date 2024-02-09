import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Link, useParams }  from "react-router-dom";
import Styles from "./DestinationsDetails.module.scss"
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs"




const HotelsNav  = () => {
    const [data, setData] = useState([]);
    const endpoint = "http://localhost:4000/destinations"

    useEffect(() => {
        const getData = async () => {
          try {
          const res = await axios.get(endpoint);
          setData(res.data);
        } catch (err) {
          console.error(err)
        }
        } 
        getData();
      }, []);

      return (
        <section className={Styles.hotelNavStyle}>
          {data &&
            data.map((data) => {
              return (
                <li key={data.id}>
                  <NavLink to={`/Destinationer/${data.slug}`}  className="nav-link" style={({ isActive }) => ({color: isActive ? 'red' : '#000'})}>
                    {data.name}
                  </NavLink>
                </li>
              );
            })}
        </section>
      );
}

const HotelList = () => {
  const [data, setData] = useState();
  const { slug } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://localhost:4000/destinations/${slug}`
      );
      setData(res.data);
      console.log(res)
    };
    getData();
  }, [slug]);
  return (
   <>
      <HotelsNav />
     <Breadcrumbs />
      <figure className={Styles.figureMain}>
      {data && (
        <div className={Styles.hotelsContainer}>
          <h2>Vores hoteller i {data.name}</h2>
          <p>{data.description}</p>
          <div className={Styles.citiesList}>
            {data.cities.map((item) => (
              <div className={Styles.cityCard} key={item.city_id}>
                <Link>
                  <div className={Styles.imageContainer}>
                  <img src={`http://localhost:4000/images/${item.CityImage.city_image_filename}`} alt={item.CityImage.city_image_title}/>
                  </div>
                  <h2>{item.name}</h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </figure>
        
    </>
  );
};



export {HotelsNav, HotelList,}

