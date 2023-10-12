import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const nav = useNavigate();
  const apiUrl = "https://64fca63a605a026163aeb538.mockapi.io/Faculty";

  const [data, setData] = useState({});

  return (
    <>
      <form>
        <table>
          <tr>
            <td>
              <h1>Enter Name:</h1>
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <h1>Enter Image path:</h1>
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setData({ ...data, image: e.target.value });
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <h1>Enter Number :</h1>
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setData({ ...data, number: e.target.value });
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <h1>Enter Email:</h1>
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
            </td>
          </tr>
        </table>
      </form>
      <input
        type="button"
        value="Add Faculty"
        onClick={() => {
          fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
          }).then((res) => {
            nav("/faculties");
          });
        }}
      />
    </>
  );
};

export default Form;
