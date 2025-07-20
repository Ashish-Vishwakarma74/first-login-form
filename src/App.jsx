import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setName] = useState("");
  const [password, setEmail] = useState("");
  const handleSubmit = () => {
    console.log(userName, password);
  };
  return (
    <>
      <div className="outer sm-25">
        <div className=" container w-25 mb-1 pb-1 scol-xl-12">
          <div className="row">
             <h1 className="login text-center fs-1 text-dark pt-5">Login</h1>
            <div className="column col-sm-12">
              <h1>
                <>
                  <div className="mb-1 shadow-sm-2 name">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      <h6>UserName</h6>
                    </label>
                    <input
                      type="user"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder=" Enter user name"
                    />
                  </div>
                  <div className="mb-3 pb-5">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                     <h6> Password</h6>
                    </label>
                    <input
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Password"
                      rows={2}
                      defaultValue={""}
                    />
                     <h6 className="for text-danger ">Forget password</h6>
                  </div>
                  <button className="btn"><h6>Sumbit</h6></button>
                  <div className="icon-con">
                  <img src="/facebook.png"className="log"/>
                  <img src="/twitter.png"className="log"/>
                   <img src="/tele.png"className="log"/>
                  </div>
                </>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
