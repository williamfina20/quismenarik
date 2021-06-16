import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const QuisSummary = ({ location }) => {
  const history = useHistory();

  useEffect(() => {
    if (!location.state) history.push("/");
  }, []);

  if (!location.state) {
    return <div>Ini Adalah SUmmary</div>;
  } else {
    return (
      <div className="container">
        <div className="text-center my-3">
          <h2>Jawaban Quis</h2>
          <h4>
            Score : {location.state.score.correct} dari{" "}
            {location.state.score.false}
          </h4>
        </div>
        {location.state.quiz.map((item, index) => (
          <div className="card mb-3" key={index}>
            <div className="card-header bg-white">
              {index + 1}. {item.question}
            </div>
            <div className="card-body">
              {item.options.map((item, index) => (
                <div
                  key={item.id}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      backgroundColor: item?.selected ? "greenyellow" : "grey",
                      cursor: "pointer",
                      marginRight: 5,
                    }}
                  />
                  <div> {item.title}</div>
                </div>
              ))}
            </div>
            <div className="card-footer bg-white">
              {item.options.find(
                (option) => option.correct && option.selected === option.correct
              ) ? (
                <div className="text-success">
                  Jawaban: {item.options.find((item) => item.correct).title}
                </div>
              ) : (
                <>
                  <div className="text-danger">
                    {item.options.find((item) => item.selected)?.title ??
                      "Pertanyaan tidak dijawab"}
                  </div>
                  <div className="text-success">
                    Jawaban: {item.options.find((item) => item.correct).title}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default QuisSummary;
