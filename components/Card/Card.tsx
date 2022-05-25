import React, { useContext } from "react";
import { RootContext } from "../../RootContext/RootContext";
import styles from "./style.module.css";
const Card = () => {
  const { state }: any = useContext(RootContext);
  const { image, gender1, nationality } = state;
  // console.log(gender1);

  return (
    <>
      {image?.map((details: any, index: number) => {
        const { email, name, picture, gender, selectedItem } = details;

        if (gender.toLowerCase() == gender1.toLowerCase() || gender1 == "All") {
          return (
            <div className={styles.cardCon} key={index}>
              <img
                src={picture?.thumbnail}
                alt="image"
                className={styles.image}
              />
              <div className={styles.name}>
                <p
                  className={styles.p}
                >{`${name?.title} ${name?.first} ${name?.last} (${nationality}) `}</p>
                <p className={styles.p}>{email}</p>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Card;
