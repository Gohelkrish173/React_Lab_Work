import {useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";

const EditFac=()=>{
    const [data,setData]=useState({});
    const param = useParams();
    const navi = useNavigate();
    
    const apiUrl="https://64fca63a605a026163aeb538.mockapi.io/Faculty/";

    useEffect(()=>{
        fetch(apiUrl+"/"+param.id,{method:"GET"})
        .then((res)=>res.json())
        .then((res)=>setData(res));
    },[]);

    return(
        <>
        <table>
            <tr>
                <td>Enter Name :</td>
                <td><input type="text" value={data.name} onChange={(e)=>{
                     setData({...data,name:e.target.value});
                }}/></td>
            </tr>
            <tr>
                <td>Enter Image Path :</td>
                <td><input type="text" value={data.image} onChange={(e)=>{
                     setData({...data,image:e.target.value});
                }}/></td>
            </tr>
            <tr>
                <td>Enter Number :</td>
                <td><input type="text" value={data.number} onChange={(e)=>{
                     setData({...data,number:e.target.value});
                }}/></td>
            </tr>
            <tr>
                <td>Enter Email :</td>
                <td><input type="text" value={data.email} onChange={(e)=>{
                     setData({email:e.target.value,...data});
                }}/></td>
            </tr>
            <tr>
                <td><input type="submit" value="Change" className="btn btn-primary"
                    onClick={(e)=>{
                        fetch(apiUrl+"/"+param.id,{method:"PUT",
                        body:JSON.stringify(data),
                        headers:{"Content-Type":"application/json"}})
                        .then((res)=>navi('/faculties'));
                    }}/></td>
            </tr>
        </table>
        </>
    )
}

export default EditFac;