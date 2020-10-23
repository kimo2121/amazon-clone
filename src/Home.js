import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="New HP Chromebook 14-inch HD Laptop, Intel Celeron N4000, 4 GB RAM, 32 GB eMMC, Chrome (14a-na0010nr, Mineral Silver)"
            price={300.0}
            image="https://images-na.ssl-images-amazon.com/images/I/91shKLxoedL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="KitchenAid KSM180QHSD 100 Year Limited Edition Queen of Hearts Stand Mixer, Passion Red"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81LBhCVGIPL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="49538094"
            title="AUKEY FM Transmitter, Radio Adapter Car Kit with USB Car Charger, Compatible with Smartphones"
            price={9.09}
            image="https://images-na.ssl-images-amazon.com/images/I/61F6csx1nSL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="68957430"
            title="SAMSUNG SM-T510NZDFXAR Galaxy Tab A 10.1 64 GB Wifi Tablet, Silver, 2019"
            price={276.59}
            image="https://images-na.ssl-images-amazon.com/images/I/61KujhorFTL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="75149835"
            title="Oculus Quest All-in-one VR Gaming Headset – 128GB"
            price={551.01}
            image="https://images-na.ssl-images-amazon.com/images/I/71D9OsZmWxL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <Product
          id="13587644"
          title="Sony X800H 85 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model"
          price={889.98}
          image="https://images-na.ssl-images-amazon.com/images/I/71tjBJd65uL._AC_SL1080_.jpg"
          rating={5}
        />
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
