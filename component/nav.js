import Styles from "./nav.module.css";
import Image from "next/image";
import Witty from "./../public/witty-leap.png";

function Nav() {
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.logo}>
          <Image
            className={Styles.logoimg}
            src={Witty}
            height={100}
            width={100}
            alt="Witty"
          ></Image>
        </div>
        <nav className={Styles.nav}>
            <ul className={Styles.ul}>
                <li className={Styles.li}>
                  <a className={Styles.a}>Home</a>  
                </li>
                <li className={Styles.li}>
                  <a className={Styles.a}>About</a>  
                </li>
                <li className={Styles.li}>
                  <a className={Styles.a}>Services</a>  
                </li>
                <li className={Styles.li}>
                  <a className={Styles.a}>Contact Us</a>  
                </li>
                <li className={`${Styles.li} ${Styles.login}`}>
                    <a className={Styles.a}>LogIn</a>
                </li>
                <li className={`${Styles.li} ${Styles.signup}`}>
                    <a className={Styles.a}>Sign Up</a>
                </li>
            </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
