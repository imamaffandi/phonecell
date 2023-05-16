import React from "react";
import { motion } from "framer-motion";
import { container, item } from "./utils/motion.js";
import { logo, laptop, phone } from "./assets";
import { Link } from "react-scroll";
import { PhoneCanvas } from "./canvas";

const App = () => {
  return (
    <div className="bg-primary overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex flex-row items-center p-5 absolute z-50">
        <img src={logo} alt="LOGO" className="w-10 h-10 center opacity-75" />
        <h1 className="text-lg text-center m-2 font-bold "> Gorify Cell</h1>
      </nav>
      {/* Header */}
      <header className="h-[100vh] w-full relative">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="absolute top-52 left-10 sm:inset-48 text-center w-0 z-10"
        >
          <motion.li key={[0]} variants={item}>
            <h1 className="font-black text-5xl sm:text-8xl leading-[40px] sm:leading-[80px]">
              SEDIA
            </h1>
          </motion.li>
          <motion.li key={[1]} variants={item}>
            <h1 className="font-black text-5xl sm:text-8xl leading-[40px] sm:leading-[80px]">
              SETIAP
            </h1>
          </motion.li>
          <motion.li key={[2]} variants={item}>
            <h1 className="font-black text-5xl sm:text-8xl leading-[40px] sm:leading-[80px]">
              SAAT
            </h1>
          </motion.li>
          <motion.li key={[3]} variants={item}>
            <Link to="section" smooth={true} duration={500}>
              <button className=" gradient p-3 px-5 m-5 rounded-full font-black text-lg  hover:opacity-75 transition-all button">
                Lanjut
              </button>
            </Link>
          </motion.li>
        </motion.ul>

        <PhoneCanvas />
      </header>
      {/* About Section */}
      <section
        id="section"
        className="h-[100vh] relative grid place-items-center p-10"
      >
        <motion.div
          initial={{ y: -100, scale: 0.5 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-center  p-5 text-secondary text-xl sm:text-3xl font-black">
            Dapatkan layanan perbaikan handphone berkualitas dengan harga
            terjangkau
          </h1>
          <p className="text-center md:px-20">
            Gorify adalah situs layanan telepon yang didesain untuk semua
            kebutuhan terkait telepon Anda. Baik anda mencari telepon baru,
            memperbaiki yang rusak, atau membuka kunci perangkat anda.
            <span className="hidden sm:inline">
              Hubungi kami sekarang untuk mendapatkan layanan terbaik!
            </span>
          </p>
        </motion.div>
      </section>
      {/* Service Section */}
      <section className="h-[100vh] flex flex-col sm:flex-row p-10 sm:justify-around text-start sm:p-20">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.1 }}
          className="sm:py-28 p-3"
        >
          <h3 className="text-3xl text-center  sm:text-left text-secondary font-black">
            Layanan 24 jam
          </h3>
          <p className="text-center max-w-sm sm:text-left">
            Dengan antarmuka yang ramah pengguna dan tim ahli siap membantu
            anda, Gorify memudahkan Anda untuk mendapatkan manfaat maksimal dari
            telepon Anda.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <img
            src={phone}
            alt="phone"
            className="w-60 h-60 object-cover rounded-xl shadow-sm"
          />
        </motion.div>
      </section>
      {/* Service Section */}
      <section className="h-[100vh] flex flex-col sm:flex-row sm:justify-evenly text-center sm:text-start p-10 sm:p-20">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <img
            src={laptop}
            alt="laptop"
            className="w-60 h-60 object-cover rounded-xl shadow-sm"
          />
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          transition={{ delay: 0.1 }}
          whileInView={{ x: 0 }}
          className="sm:py-28 p-3"
        >
          <h3 className="text-3xl text-secondary font-black">
            Layanan Terbaik!
          </h3>
          <p className="max-w-sm">
            Gorify menyediakan layanan perbaikan untuk kerusakan perangkat yang
            mungkin terjadi, serta layanan membuka kunci sehingga anda dapat
            menggunakan perangkat anda dengan maksimal.
          </p>
        </motion.div>
      </section>
      {/* Footer / Contact Section */}
      <section className="h-[50px] sm:h-[100vh] flex flex-col sm:flex-row  justify-between  sm:items-baseline pt-20">
        <div className=" flex flex-row items-center p-20 ">
          <img
            src={logo}
            alt="LOGO"
            className="hidden sm:block w-10 h-10 center opacity-75"
          />
          <h1 className="text-lg text-center m-2 font-bold hidden sm:block">
            Gorify Cell
          </h1>
        </div>
        <div className="flex-col items-center p-3 sm:p-32">
          <div>
            <h1 className="text-5xl text-center sm:text-start text-secondary font-black">
              Hubungi Kami
            </h1>
            <p className="text-center sm:text-start">081230677319</p>
            <p className="text-center sm:text-start">
              Jl.Darmo Ngaliman Kota Batu
            </p>
            <p className="text-center sm:text-start">
              imamaffandi715@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
