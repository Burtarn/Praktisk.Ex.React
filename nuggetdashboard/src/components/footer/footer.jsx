import React from "react";
import { NavLink } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex border-bottom justify-content-center justify-content-lg-between p-4">
        <div className="d-lg-block d-none me-5">
          <span>Följ oss på sociala medier:</span>
        </div>

        <div>
          <a href="" className="text-reset me-4">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="text-reset me-4">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="text-reset me-4">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="text-reset me-4">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="text-reset me-4">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="" className="text-reset me-4">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mb-4 mx-auto">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Bitcoin Bros
              </h6>
              <p>
              Är du redo att revolutionera ditt sätt att tänka på pengar?
              Säg adjö till traditionell bankverksamhet och hej till en gränslös,
              decentraliserad finansiell värld med Bitcoin Bros – det
              banbrytande Bitcoin-företaget som förändrar spelplanen!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mb-4 mx-auto">
              <h6 className="text-uppercase fw-bold mb-4">Produkter</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pengar
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                Pengar
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                Pengar
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                Pengar
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mb-4 mx-auto">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <NavLink to="/" className="text-reset">
                  Home
                </NavLink>
              </p>
              <p>
                <NavLink to="/calc" className="text-reset">
                  Support
                </NavLink>
              </p>
              <p>
                <NavLink to="/about" className="text-reset">
                  Sparkalkylator
                </NavLink>
              </p>
              <p>
                <NavLink to="/about/contact" className="text-reset">
                  Dashboard
                </NavLink>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mb-4 mb-md-0 mx-auto">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                På Månen, 000 00, Rymden
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@bitcoinbros.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
                234 567 88
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 01
                234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="p-4 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2025 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Bitcoin bros inc
        </a>
      </div>
    </MDBFooter>
  );
}
