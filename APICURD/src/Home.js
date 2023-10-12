import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <table>
        <tr>
          <td>
            <Link className="btn btn-primary" to="/"> Home </Link>
          </td>
          <td>
            <Link className="btn btn-primary" to="/Faculties">All Faculties</Link>
          </td>
        </tr>
      </table>
      <Outlet />
    </>
  );
};

export default Home;
