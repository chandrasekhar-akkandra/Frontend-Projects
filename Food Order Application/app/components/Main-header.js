import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import Navlink from "./navLink";
export default function Mainheader(){
return(
    <header className={classes.header}>
        <Link href="/" className={classes.logo}>
            <Image src={logo} alt="icon for meals" priority/>
            Next level Food Meal
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li><Navlink href="/meals" >Browse Meals</Navlink></li>
                <li><Navlink href="/community">Community Page</Navlink></li>
            </ul>
        </nav>
    </header>
);



}