'use client';
import style from './imagepicker.module.css';
import Image from 'next/image';
import { useRef, useState } from 'react';
export default function Imagepicker({label,name}){
    const [preview,Setpreview] = useState();
    const ref=useRef();
    function handleClick(){
        ref.current.click();
    }
    function handleChange(event){
            const file=event.target.files[0];
            if(!file){
                Setpreview(null);
            }
            const fileReader=new FileReader();
            fileReader.onload=()=> {
                Setpreview(fileReader.result)
            };
            fileReader.readAsDataURL(file);
    }
    return(
        <div className={style.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={style.controls}>
                <div className={style.preview}>
                    {!preview && <p>No image picked yet</p>}
                    {preview && (<Image src={preview} alt="image selected by the user" fill></Image>)}

                </div>
                <input ref={ref} className={style.input}type='file' id={name} accept='image/png , image/jpeg' name={name} onChange={handleChange}></input>
                <button onClick={handleClick} className={style.button} type="button">Pick an Image</button>
            </div>
        </div>
      
    );

}