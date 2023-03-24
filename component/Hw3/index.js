import { Button, Input } from "antd";
import { useState } from "react";

const Hw3=() =>{
    const [arr, setArr] = useState(0)
    const [formData, setFormData] = useState('')
    const sumArray=()=>{
        const newSum=arr.map((item)=>{
            let sum=0
            sum+=item.a;
        })
        setArr(newSum)
    }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    return(
        <div>
            <Input placeholder="Input number" name={arr} value={formData} onChange={onChange}></Input>
            <Button onClick={sumArray}>Sum</Button>
            <div></div>
        </div>
    );
};
export default Hw3;