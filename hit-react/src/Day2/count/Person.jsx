import React from "react";

import { personsData } from './data';

const Person = () => {
    // console.log({props});
    // console.log(123);
     return personsData.map((item, index) => {
        return (
            <div>
                {/* <table style={{"border":"1px"}}>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                </table> */}
                <h1>{item.children}</h1>
                <img src={item.avt} alt="" />
                <p>{item.name}</p>
                <p>{item.age}</p>
            </div>
        )
    })
    
}

export default Person;