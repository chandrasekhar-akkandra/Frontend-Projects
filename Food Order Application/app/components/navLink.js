"use client"
import Link from "next/link";
import style from "./navLink.module.css";
import { usePathname } from "next/navigation";

export default function Navlink({href,children}){
const path=usePathname();
return(
<Link href={href} className={path.startsWith(href)?`${style.Link} ${style.active}`:style.Link}>{children}</Link>
);

}