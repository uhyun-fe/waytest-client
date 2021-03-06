import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AnswerBox = ({ items, select }) => {
   return (
      <View>
         {items.map(({ title, value }) => (
            <Button key={value} onClick={() => select(value)}>
               {title.split("\n").map((t, i) => (
                  <span key={i}>
                     {t}
                     <br />
                  </span>
               ))}
            </Button>
         ))}
      </View>
   );
};

const View = styled.div`
   margin-bottom: 50px;
   display: flex;
   flex-direction: column;
`;

const Button = styled.button`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 2px 20px 0;
   width: 100%;
   height: 100px;
   font-size: 1.1em;
   text-align: left;
   border: none;
   border-radius: 10px;
   background: #f2f2f2;
   transition: 0.2s ease-in-out;
   &:not(:last-child) {
      margin-bottom: 20px;
   }
   &:hover {
      color: #fff;
      background: #874703;
   }
`;

AnswerBox.propTypes = {
   items: PropTypes.arrayOf(
      PropTypes.shape({
         title: PropTypes.string.isRequired,
         value: PropTypes.string.isRequired,
      })
   ).isRequired,
   select: PropTypes.func.isRequired, // 답 선택
};

export default AnswerBox;
