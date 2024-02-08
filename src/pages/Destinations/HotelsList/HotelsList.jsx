import axios from "axios";
import { useEffect, useState } from "react";

import { Link }  from "react-router-dom";


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
        <section>
          {data &&
            data.map((data) => {
              return (
                <li key={data.id}>
                  <Link to={`/destinations/${data.slug}`} className="nav-link">
                    {data.name}
                  </Link>
                </li>
              );
            })}
        </section>
      );
    
}

