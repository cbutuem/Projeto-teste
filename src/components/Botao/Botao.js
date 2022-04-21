import axios from "axios";
import { useEffect, useState } from "react";

 export function Botao(props){
    const [data, setData] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
          const response = await axios.get(
            "https://ironrest.herokuapp.com/camila-dante"
          );
    
          setData(response.data);
        }
        fetchData();
      }, []);
     
     return(
        <>
        </>
     );
 }