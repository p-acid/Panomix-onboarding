import React, { useState } from 'react';
import styled from 'styled-components';
import UserPool from '../../../utils/UserPool';
import { TEST_URL } from '../../../config';

const SubmitBox = props => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    userPic: '',
  });

  const { email, password, firstName, lastName, userPic } = userData;

  const handleUserData = ({ target }) => {
    const { name, value } = target;

    setUserData(prev => {
      return { ...prev, [name]: value };
    });
  };

  const submit = e => {
    e.preventDefault();

    const attributesList = [
      ['given_name', firstName],
      ['family_name', lastName],
      ['email', email],
    ].map(item => {
      return {
        Name: item[0],
        Value: item[1],
      };
    });

    UserPool.signUp(email, password, attributesList, null, (err, data) => {
      if (err) {
        // when occur error
      } else {
        fetch(`${TEST_URL}/accounts/signup`, {
          method: 'POST',
          body: JSON.stringify({
            userSub: data.userSub,
            email: email,
            first_name: firstName,
            last_name: lastName,
            profile_picture: '',
          }),
        });
      }
    });
  };

  return (
    <Wrapper onSubmit={submit}>
      {INPUT_DATA.map((item, idx) => {
        const { type, placeholder } = item;
        return (
          <Input
            key={idx}
            type={type === 'password' && type}
            name={type}
            value={userData.type}
            placeholder={placeholder}
            onChange={handleUserData}
          />
        );
      })}
      <Input
        type="file"
        name="userPic"
        value={userPic}
        onChange={handleUserData}
      />
      <Button>Submit</Button>
    </Wrapper>
  );
};

export default SubmitBox;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 3rem;
  width: 400px;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 0.5px solid #f5f5f5;
  box-shadow: 0px 1px 3px rgb(9 16 55 / 40%);
  border-radius: 20px;
  text-align: center;
  line-height: 1rem;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 0.8rem 11.25rem;
  font-weight: 500;
  color: #666666;
  background-color: #f6f6f6;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 25%);
  border-radius: 42px;
  cursor: pointer;
`;

const INPUT_DATA = ['email', 'password', 'firstName', 'lastName'].map(item => {
  return { type: item, placeholder: `Please Type your ${item}` };
});
