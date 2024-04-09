import React, { useState, useEffect } from "react";

const Questions = () => {
  const question = [
    "Question 1: What is react",
    "Question 2: What is JavaScript",
    "Question 3: What is Node.js",
    "Question 4: What is Python",
    "Question 5: What is Express",
  ];

  const answer = ["Library", "Framework", "Language", "other"];

  const [number, setNumber] = useState("0");
  const [quest, setQuest] = useState("0");
  const [ans, setAns] = useState("0");
  const [score, setScore] = useState("0");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [submit, setSubmit] = useState(false);

  const NextGo = () => {
    if (number >= 0 && number < 5) {
      var num = parseInt(number + 1);
      setNumber(num);
      setQuest(question[num - 1]);
      setSelectedOption(null); // Reset selected option when moving to the next question
      setIsAnswerCorrect(false); // Reset answer correctness state
      setAnswerSelected(false);
    }
  };

  useEffect(() => {
    console.log(number);
    if (number >= 0 && number <= question.length) {
      if (number === 1) {
        console.log("first");
        setAns(0);
      } else if (number === 2) {
        console.log("sec");
        setAns(2);
      } else if (number === 3) {
        console.log("third");
        setAns(3);
      } else if (number === 4) {
        console.log("fourth");
        setAns(2);
      } else if (number === 5) {
        console.log("fifth");
        setAns(1);
      }
    }
  }, [number]);

  const handleAnswer = (selected) => {
    setSelectedOption(selected);
    const correctAnswerIndex = parseInt(ans);
    console.log(answer[selected]);
    if (correctAnswerIndex === selected) {
      console.log("your answer is right");
      setIsAnswerCorrect(true);
      var points = parseInt(score) + 1;
      setScore(points);
    } else {
      console.log("your answer is wrong");
      setIsAnswerCorrect(false);
    }
    setAnswerSelected(true);
  };

  const submitHandler = () => {
    setSubmit(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor:"black",
        backgroundImage:
          "url('https://as2.ftcdn.net/v2/jpg/03/45/88/07/1000_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!submit ? (
        <>
          {number !== "0" ? (
            <>
              <div
                style={{
                  backgroundColor: "white",
                  height: "100px",
                  width: "600px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontSize: "24px",
                }}
              >
                {quest}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                }}
              >
                {answer.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleAnswer(index)}
                    style={{
                      backgroundColor:
                        selectedOption === index
                          ? isAnswerCorrect
                            ? "green"
                            : "grey"
                          : "white",
                      height: "60px",
                      width: "150px",
                      borderRadius: "10px",
                      marginRight: "100px",
                      marginBottom: "70px",
                      pointerEvents: answerSelected ? "none" : "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {number === 5 ? (
                  <div
                    onClick={submitHandler}
                    style={{
                      backgroundColor: "green",
                      height: "40px",
                      width: "100px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                  >
                    Submit
                  </div>
                ) : (
                  <div
                    onClick={NextGo}
                    style={{
                      backgroundColor: "white",
                      height: "40px",
                      width: "60px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    Next
                  </div>
                )}
              </div>
              <h2 style={{ color: "white" }}> Score : {score} </h2>
            </>
          ) : (
            <>
              <div
                style={{
                  color: "white",
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              >
                Are you ready to start the quiz???
              </div>
              <div
                onClick={NextGo}
                style={{
                  backgroundColor: "white",
                  height: "40px",
                  width: "60px",
                  borderRadius: "10px",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                Start
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div
            style={{ color: "white", fontSize: "42px", marginBottom: "20px" }}
          >
            Your score is {score}
          </div>
          
        </>
      )}
    </div>
  );
};

export default Questions;
