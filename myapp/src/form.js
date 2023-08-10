import React from "react";
import ReactDOM  from "react";

    const FORM1=(props)=>{
        return(<>
        <body>
            <table>
                <form>
                    <tr>
                    <td><p>{props.Name}</p></td>
                    </tr>
                </form>
            </table>
        </body>
        </>
        );
    }

export default FORM1;