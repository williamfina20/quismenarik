import React, { useState, useEffect } from "react";
import { quiz as quizData } from "../component/quis/fakeData";
import { useTimer } from "react-timer-hook";
import { Link, useHistory } from "react-router-dom";

const Quis = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [jumlah, setJumlah] = useState(0);
  const [quiz, setQuiz] = useState(quizData);
  const [score, setScore] = useState({
    correct: 0,
    false: 0,
  });

  const history = useHistory();

  const { id, question, options } = quiz[currentIndex];

  const MINUTES = 10 * 60;
  const time = new Date();
  time.setSeconds(time.getSeconds() + MINUTES); // 10 minutes timer
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () =>
      history.push({
        pathname: "/quissummary",
        state: {
          quiz,
          score,
        },
      }),
  });

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    checkScore();
  }, [quiz]);

  const nextQuestion = () => {
    if (quiz.length - 1 === currentIndex) return;
    setCurrentIndex(currentIndex + 1);
  };

  const previousQuestion = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const selectOption = (indexSelected, indexOptionSelected) => {
    setQuiz(
      quiz.map((item, index) =>
        index === indexSelected
          ? {
              ...item,
              selected: true,
              options: options.map((item, index) =>
                index === indexOptionSelected
                  ? { ...item, selected: true }
                  : { ...item, selected: false }
              ),
            }
          : item
      )
    );
    setJumlah(jumlah + 1);
  };

  const checkScore = () => {
    const questionAnswared = quiz.filter((item) => item.selected);
    const questionCorrect = questionAnswared.filter((item) =>
      item.options.find(
        (option) => option.correct && option.selected === option.correct
      )
    );
    setScore({
      correct: questionCorrect.length,
      false: quiz.length - questionCorrect.length,
    });
  };

  return (
    <div className="container">
      <h2 className="text-center my-3">
        QUiz Screen - Score:{score.correct}-{score.false} || Timer: {hours}:
        {minutes}:{seconds}
      </h2>
      <div className="card">
        <div
          className="card-body"
          style={{ display: "flex", padding: 10, flexWrap: "wrap" }}
        >
          {quiz.map((item, index) => (
            <div
              key={index}
              className="border border-primary"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                width: 40,
                borderRadius: 5,
                marginRight: 5,
                marginBottom: 5,
                cursor: "pointer",
                backgroundColor:
                  index === currentIndex
                    ? "greenyellow"
                    : item?.selected
                    ? "grey"
                    : "transparent",
              }}
              onClick={() => setCurrentIndex(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="card">
        <div className="card-header bg-white">
          {currentIndex + 1}. {question}
        </div>
        <div className="card-body">
          {options.map((item, index) => (
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
                onClick={() => selectOption(currentIndex, index)}
              />
              <div> {item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 5,
        }}
      >
        <button
          className="btn btn-secondary col-sm-2"
          onClick={() => previousQuestion()}
          disabled={currentIndex === 0 ? true : false}
        >
          Kembali
        </button>
        {quiz.length - 1 === currentIndex ? (
          <>
            {jumlah >= quiz.length ? (
              <Link
                className="btn btn-success col-sm-2"
                to={{
                  pathname: "/quissummary",
                  state: {
                    quiz,
                    score,
                  },
                }}
              >
                Selesai
              </Link>
            ) : (
              <button className="btn btn-success col-sm-2" disabled={true}>
                Selesai
              </button>
            )}
          </>
        ) : (
          <button
            className="btn btn-primary col-sm-2"
            onClick={() => nextQuestion()}
          >
            Selanjutnya
          </button>
        )}
      </div>
    </div>
  );
};

export default Quis;
