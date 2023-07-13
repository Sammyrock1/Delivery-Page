import React from 'react';
import Styles from '../Styles/index.module.scss';
import { RiArrowDropDownLine } from 'react-icons/ri';

const FrequentlyQuestion = () => {
  return (
    <div className={Styles.QuestionContainer}>
      <div className={Styles.Question}>
        <h1>Frequent Asked Question</h1>
      </div>
      <div className={Styles.QuestionTR}>
        <div className={Styles.FrequentQuestion}>
          <p>Do you offer same day delivery?</p>
          <RiArrowDropDownLine fontSize={'30px'} />
        </div>
        <div className={Styles.FrequentQuestion}>
          <p>Can i pay on delivery?</p>
          <RiArrowDropDownLine fontSize={'30px'} />
        </div>
        <div className={Styles.FrequentQuestion}>
          <p>How long does shipping take?</p>
          <RiArrowDropDownLine fontSize={'30px'} />
        </div>
        <div className={Styles.FrequentQuestion}>
          <p>What are the supported payment methods?</p>
          <RiArrowDropDownLine fontSize={'30px'} />
        </div>
        <div className={Styles.FrequentQuestion}>
          <p>Do you offer refund?</p>
          <RiArrowDropDownLine fontSize={'30px'} />
        </div>
        <div className={Styles.FrequentQuestion}>
          <p>Can i delivery fragile goods?</p>
          <RiArrowDropDownLine fontSize={'30px'} />
        </div>
        <div className={Styles.FrequentQuestion1}>
          <p>Do you offer same day delivery?</p>
          <RiArrowDropDownLine fontSize={'30px'} />
        </div>
      </div>
    </div>
  );
};
export default FrequentlyQuestion;
