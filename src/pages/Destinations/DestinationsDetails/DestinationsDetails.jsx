import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Link, useParams }  from "react-router-dom";
import Styles from "./DestinationsDetails.module.scss"



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
                  <NavLink to={`/destinations/${data.slug}`} className="nav-link">
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
    </>
  )
};



export {HotelsNav, HotelList,}

