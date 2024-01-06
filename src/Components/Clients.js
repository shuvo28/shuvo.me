import React, { useState, useEffect } from "react";
import axios from "axios";
import client from "../Assets/images/client1.png"

function Clients() {
  const [clients, setClients] = useState({ data: [] });

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/front/clients")
  //     .then((res) => {
  //       setClients(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const clientsData = [
    {
      name: "Mizanur Rahman",
      img: client
    },
    {
      name: "John Due",
      img: client
    },
    {
      name: "Add Dev",
      img: client
    },
    {
      name: "Adon Smith",
      img: client
    },
    {
      name: "Mizanur Rahman",
      img: client
    },
    {
      name: "John Due",
      img: client
    },
    {
      name: "Add Dev",
      img: client
    },
    {
      name: "Adon Smith",
      img: client
    },
    {
      name: "Mizanur Rahman",
      img: client
    },
  ]

  return (
    <div id="clients" className="clients-con">
      <div className="main-container">
        <span className="whatI-sub">POPULAR CLIENTS</span>
        <h1 className="clients-title">Awesome Clients</h1>
      </div>

      <div className="clients-subcon">
        <div className="row">
          <div className="col-md-12 col-lg-4 client-butt">
            <div
              className="nav flex-column nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                PHP
              </button>
              <button
                className="nav-link"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Laravel
              </button>
              <button
                className="nav-link"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                React
              </button>
              <button
                className="nav-link"
                id="v-pills-react-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-react"
                type="button"
                role="tab"
                aria-controls="v-pills-react"
                aria-selected="false"
              >
                JavaScript{" "}
              </button>
              <button
                className="nav-link"
                id="v-pills-laravel-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-laravel"
                type="button"
                role="tab"
                aria-controls="v-pills-laravel"
                aria-selected="false"
              >
                PSD / Xd / FiGMA to HTML
              </button>
            </div>
          </div>
          <div className="col-md-12 col-lg-8">
            <div className="tab-content client-con" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="row">
                  {clientsData.map((cli, index) => {
                    return (
                      <div key={index} className="col-sm-6 col-md-4 mb-4">
                        <div className="clients-content">
                          <div className="client-img-con">
                            <img src={cli.img} alt="cli.img" />
                          </div>
                          <div className="client-txt-con">
                            <span>{cli.name}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div className="row">
                  {clients.data.map((cli, index) => {
                    return (
                      <div key={index} className="col-sm-6 col-md-4 mb-4">
                        <div className="clients-content">
                          <div className="client-img-con">
                            <img src={cli.img} alt="cli.img2" />
                          </div>
                          <div className="client-txt-con">
                            <span>{cli.name}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <div className="row">
                  {clients.data.map((cli, index) => {
                    return (
                      <div key={index} className="col-sm-6 col-md-4 mb-4">
                        <div className="clients-content">
                          <div className="client-img-con">
                            <img src={cli.img} alt="cli.img3" />
                          </div>
                          <div className="client-txt-con">
                            <span>{cli.name}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <div className="row">
                  {clients.data.map((cli, index) => {
                    return (
                      <div key={index} className="col-sm-6 col-md-4 mb-4">
                        <div className="clients-content">
                          <div className="client-img-con">
                            <img src={cli.img} alt="cli.img5" />
                          </div>
                          <div className="client-txt-con">
                            <span>{cli.name}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-laravel"
                role="tabpanel"
                aria-labelledby="v-pills-laravel-tab"
              >
                <div className="row">
                  {clients.data.map((cli, index) => {
                    return (
                      <div key={index} className="col-sm-6 col-md-4 mb-4">
                        <div className="clients-content">
                          <div className="client-img-con">
                            <img src={cli.img} alt="cli.img8" />
                          </div>
                          <div className="client-txt-con">
                            <span>{cli.name}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-react"
                role="tabpanel"
                aria-labelledby="v-pills-react-tab"
              >
                <div className="row">
                  {clients.data.map((cli, index) => {
                    return (
                      <div key={index} className="col-sm-6 col-md-4 mb-4">
                        <div className="clients-content">
                          <div className="client-img-con">
                            <img src={cli.img} alt="cli.img6" />
                          </div>
                          <div className="client-txt-con">
                            <span>{cli.name}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Clients;
