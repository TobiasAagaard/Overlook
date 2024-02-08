import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink }  from "react-router-dom";
import Styles from "./DestinationsDetails.module.scss"


export const HotelsNav  = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
          const res = await axios.get(`http://localhost:4000/destinations`);
          console.log(res)
          setData(res.data);
        } 
        getData();
      }, [setData]);

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

