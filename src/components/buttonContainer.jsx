import styles from "./buttonsContainer.module.css";

const Buttons = ({ onButtonClick }) => {
  let buttonsElement = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={styles.buttonContainer}>
        {buttonsElement.map((buttonsName) => (
          <button key={buttonsName} className={styles.button} onClick={()=>onButtonClick(buttonsName)}>
            {buttonsName}
          </button>
        ))}
      </div>
    </>
  );
};

export default Buttons;
