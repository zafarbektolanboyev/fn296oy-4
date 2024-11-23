import React, { useState } from "react";
import Header from "./components/Header";
import circle from "./assets/circle.png";
import earth from "./assets/earth.svg";
import facebook from "./assets/facebook.svg";
import github from "./assets/github.svg";
import instagram from "./assets/instagram.svg";
import telegram from "./assets/telegram.svg";

function App() {
  const [url, setUrl] = useState(null);
  const [fData, setFdata] = useState(null);
  const [users, setUsers] = useState([]);
  console.log(fData);
  return (
    <>
      <Header></Header>
      <div className="container w-[100%] justify-center max-w-7xl">
        <div className="py-16 flex justify-center mb-5 px-[20px]">
          <div className="bg-white w-9/12  rounded-md  px-38 w-80">
            <div className="title py-5 px-3">
              <div>
                <h1 className="text-3xl text-slate-950 mb-2">
                  Kompaniya ma'lumotlari
                </h1>
                <p className="deck">
                  Kompaniya haqidagi ma'lumotlarni kiriting
                </p>
              </div>

              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const result = {};
                  formData.entries().forEach(([key, value]) => {
                    result[key] = value;
                  });
                  setFdata((prev) => {
                    return { ...prev, ...result };
                  });
                  result.url = fData.url;
                  setUsers((prev) => [...prev, { ...prev, ...result }]);
                  e.target.reset();
                }}
              >
                <div className="img flex gap-3 items-center">
                  <img
                    calssName="object-cover rounded-full"
                    width={84}
                    height={84}
                    src={url || circle}
                    alt="No image"
                  />
                  <label className="text-sky-600 font-medium text-xl hover:underline cursor-pointer">
                    Yuklash
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const img = e.target.files[0];
                        const url = URL.createObjectURL(img);
                        const rasm = document.querySelector(img[1]);
                        setUrl(url);
                        setFdata((prev) => {
                          return { ...prev, url };
                        });
                        e.target.reset();
                      }}
                    />
                  </label>
                </div>
                <label className="form-control w-full">
                  <span className="label-text">Kompaniya Nomi</span>
                  <input
                    type="text"
                    placeholder="Kompaniya nomi"
                    className="input input-bordered w-full "
                    name="companyName"
                  />
                </label>
                <label className="form-control w-full">
                  <span className="label-text">Email</span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    name="email"
                  />
                </label>
                <label className="form-control w-full">
                  <span className="label-text">Telefon raqami</span>
                  <input
                    type="tel"
                    placeholder="UZ +998 9"
                    className="input input-bordered w-full"
                    name="tel"
                  />
                </label>
                <div className="links flex flex-row gap-6">
                  <button
                    onClick={() => {
                      const modal = document.getElementById("myDialog");
                      modal.showModal();
                    }}
                    className="btn"
                  >
                    <img src={earth} width={35} height={35} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      const modal = document.getElementById("myDialog");
                      modal.showModal();
                    }}
                    className="btn"
                  >
                    <img src={instagram} width={35} height={35} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      const modal = document.getElementById("myDialog");
                      modal.showModal();
                    }}
                    className="btn"
                  >
                    <img src={telegram} width={35} height={35} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      const modal = document.getElementById("myDialog");
                      modal.showModal();
                    }}
                    className="btn"
                  >
                    <img src={facebook} width={35} height={35} alt="" />
                  </button>
                  <button
                    onClick={() => {
                      const modal = document.getElementById("myDialog");
                      modal.showModal();
                    }}
                    className="btn"
                  >
                    <img src={github} width={35} height={35} alt="" />
                  </button>
                </div>
                <div className="select flex mb-10 flex-row">
                  <label className="w-[50%] flex flex-col">
                    <span>Davlat</span>
                    <select className="select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        O'zbekiston
                      </option>
                      <option>Rossiya</option>
                      <option>Qozoqiston</option>
                      <option>Turkiya</option>
                    </select>
                  </label>
                  <label className="w-[50%] flex flex-col mb-5">
                    <span>Shaxar</span>
                    <select className="select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        Toshkent
                      </option>
                      <option>Moscova</option>
                      <option>Ostona</option>
                      <option>Anqara</option>
                    </select>
                  </label>
                </div>
                <label className="form-control w-full">
                  <span className="label-text">Yashash joyi</span>
                  <input
                    type="text"
                    placeholder="Joy"
                    className="input input-bordered w-full "
                    name="location"
                  />
                </label>
                <label className="form-control w-full">
                  <span className="label-text">Hodimlar soni</span>
                  <input
                    type="number"
                    placeholder="Joy"
                    className="input input-bordered w-full "
                    name="numWork"
                  />
                </label>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Izoh</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Kompaniya haqida izoh qoldiring"
                  ></textarea>
                </label>
                <button className="btn" type="submit">
                  Keyingisi
                </button>
              </form>
            </div>
            <div></div>
          </div>
        </div>
        {users.length === 0 && (
          <p className="text-center text-3xl py-5">Ma'lumot mavjud emas</p>
        )}
        <div className="grid grid-cols-2 pb-12 ml-[190px]">
          {users.length > 0 &&
            users.map(function ({ companyName, email, tel, url }, index) {
              return (
                <div
                  key={index}
                  className="card justify-center py-2 pb-5 bg-base-100 w-96 shadow-xl"
                >
                  <div className="card-body">
                    <h2>{companyName}</h2>
                    <h4>{email}</h4>
                    <h4>{tel}</h4>
                  </div>
                  <figure>
                    <img src={url} alt="" />
                  </figure>
                </div>
              );
            })}
        </div>

        <dialog id="myDialog" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                X
              </button>
            </form>
            <h3>Link kiriting</h3>
            <input
              type="url"
              className="input input-bordered w-full"
              placeholder="https//"
            />
            <button className="btn w-[150px] mt-3 bg-sky-500 text-white">
              OK
            </button>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default App;
