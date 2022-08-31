import React,{useState, useEffect} from "react";
import "./Counter.css";

const Counter = () => {

  const [client, setClient] = useState(1);
  const [trainer, setTrainer] = useState(1);
  const [projects, setProjects] = useState(1);
  const [years, setYears] = useState(1);

  useEffect(() => {
    if (client < 10) {
      setTimeout(() => {
        setClient((counter) => counter + 1);
      }, 100);
    }
  }, [client]);

  useEffect(() => {
    if (client < 10) {
      setTimeout(() => {
        setTrainer((counter) => counter + 1);
      }, 100);
    }
  }, [trainer]);

  useEffect(() => {
    if (client < 10) {
      setTimeout(() => {
        setProjects((counter) => counter + 1);
      }, 100);
    }
  }, [projects]);

  useEffect(() => {
    if (client < 2) {
      setTimeout(() => {
        setYears((counter) => counter + 1);
      }, 1000);
    }
  }, [years]);

  return (
    <section className="counter">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item decoration-bottom">
                <strong>{projects}</strong>
                <span>Projects</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item decoration-top">
                <strong>{client}</strong>
                <span>Happy Clients</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item decoration-bottom">
                <strong>{years}</strong>
                <span>Awards Wins</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item">
                <strong>{trainer}</strong>
                <span>Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
