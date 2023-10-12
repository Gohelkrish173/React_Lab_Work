import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Fac = () => {
  const [data, setData] = useState([]);
  const Nave = useNavigate();

  useEffect(() => {
    fetch("https://64fca63a605a026163aeb538.mockapi.io/Faculty")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const formattedData = data.map((fac) => {
    return (
      <>
        <table border="10">
          <div>
            <h1
              onClick={() => {
                Nave("/Faculties/" + fac.id);
              }}
            >
              {fac.name}
            </h1>
            <div align="center">
              <img src={fac.image} alt="..." />
            </div>
          </div>
        </table>
      </>
    );
  });
  return(<>
        <div align= "center"><Link to="/Form" className="btn btn-primary">
          Add
        </Link></div><br/>
    {formattedData}
    </>);
};

export default Fac;
