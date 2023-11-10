import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import rocketImg from "./../../public/rocket.webp";
import cloudImg from "./../../public/cloud.webp"; 
import Nav from "../../component/nav";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [hoverThree, setHoverThree] = useState(false);
  

  function HoverHandlerOne() {
    setHoverOne(true)
  }
  function HoverHandlerTwo() {
    setHoverTwo(true)
  }

  function HoverHandlerThree() {
    setHoverThree(true)
  }

  function HoverOutHandlerOne() {
    setHoverOne(false)
  }

  function HoverOutHandlerTwo() {
    setHoverTwo(false)
  }

  function HoverOutHandlerThree() {
    setHoverThree(false)
  }

  return (
    <>
      <Head>
        <title>WITTY-LEAP</title>
        <meta name="description" content="Find Your Best Carrer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav></Nav>
        <section className={styles.sectionOne}>
          <div className={styles.container}>
            <Link className={styles.link} href='/jobsinindia'><div className={styles.datacontainer} onMouseEnter={HoverHandlerOne} onMouseLeave={HoverOutHandlerOne}>
              <div className={styles.imagebox} >
              <Image className={hoverOne ? `${styles.cloudImgHover}` : `${styles.cloudimg}`} src={cloudImg} width={100} height={100} alt="cloud"></Image>
                <Image className={hoverOne ? `${styles.cloudImgtwoHover}` : `${styles.cloudimgtwo}`} src={cloudImg} width={100} height={100} alt="cloud"></Image>
                <Image
                className={styles.image}
                  src={rocketImg}
                  width={200}
                  height={200}
                  alt="next"
                ></Image>
              </div>
              <div className={styles.textbox}>
                <p className={styles.para}>Jobs in India</p>
              </div>              
            </div>
            </Link>
            <Link className={styles.link} href="/jobsinabroad"><div onMouseEnter={HoverHandlerTwo} onMouseLeave={HoverOutHandlerTwo} className={styles.datacontainer}>
              <div className={styles.imagebox}>
                <Image className={hoverTwo ? `${styles.cloudImgHover}` : `${styles.cloudimg}`} src={cloudImg} width={100} height={100} alt="cloud"></Image>
                <Image className={hoverTwo ? `${styles.cloudImgtwoHover}` : `${styles.cloudimgtwo}`} src={cloudImg} width={100} height={100} alt="cloud"></Image>
                <Image
                className={styles.image}
                  src={rocketImg}
                  width={200}
                  height={200}
                  alt="next"
                ></Image>
              </div>
              <div className={styles.textbox}>
                <p className={styles.para}>Jobs In Abroad</p>
              </div>
            </div>
            </Link>
            <Link className={styles.link} href="/needacounselor">
            <div className={styles.datacontainer} onMouseEnter={HoverHandlerThree} onMouseLeave={HoverOutHandlerThree} >
              <div className={styles.imagebox}>
              <Image className={hoverThree ? `${styles.cloudImgHover}` : `${styles.cloudimg}`} src={cloudImg} width={100} height={100} alt="cloud"></Image>
                <Image className={hoverThree ? `${styles.cloudImgtwoHover}` : `${styles.cloudimgtwo}`} src={cloudImg} width={100} height={100} alt="cloud"></Image>
                <Image
                className={styles.image}
                  src={rocketImg}
                  width={200}
                  height={200}
                  alt="next"
                ></Image>
              </div>
              <div className={styles.textbox}>
                <p className={styles.para}>Need a Counselor</p>
              </div>
            </div> 
            </Link>           
          </div>
        </section>
      </main>
    </>
  );
}
