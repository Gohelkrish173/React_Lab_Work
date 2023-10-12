import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Fac from "./Faculties";

const FacDetails = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const navi = useNavigate();
  const apiUrl = "https://64fca63a605a026163aeb538.mockapi.io/Faculty/";

  useEffect(() => {
    fetch("https://64fca63a605a026163aeb538.mockapi.io/Faculty/" + id)
      .then((res) => res.json())
      .then((res) => setDetail(res));
  }, []);

  return (
    <>
      <div>
        <h1>{detail.id}</h1>
        <img src={detail.image} alt="..." />
        <h2>{detail.name}</h2>
        <h4>Number : {detail.number}</h4>
        <h5>Email : {detail.email}</h5>
        <br />
        <table>
          <tr>
            <td>
              <Link to="/" className="btn btn-primary">
                Back To Home
              </Link>
            </td>
            <td>
              <Link to="/Faculties" className="btn btn-primary">
                Back to All Faculties
              </Link>
            </td>
            <td>
              <input
                type="button"
                className="btn btn-primary"
                value="Delete"
                onClick={() => {
                  fetch(apiUrl + id, {
                    method: "DELETE"
                  }).then((res) => {
                    navi("/faculties");
                  });
                }}
              />
            </td>
            <td>
               <Link to={"/Editfac/"+detail.id} className="btn btn-primary"> Edit Faculty </Link>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default FacDetails;
