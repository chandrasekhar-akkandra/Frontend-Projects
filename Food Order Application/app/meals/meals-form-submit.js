'use client';
import { useFormStatus } from "react-dom";
export function Formsubmit(){
 const { pending }=useFormStatus();
 return ( <button disabled={ pending }>
    {pending ? "Submitting" : "Share Meal"}
 </button> );
}