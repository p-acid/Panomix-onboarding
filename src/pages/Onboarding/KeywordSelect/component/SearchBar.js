import React from 'react';
import styled from 'styled-components';

const SearchBar = ({
  isListOn,
  searchInput,
  setSearchInput,
  handleSearchInput,
}) => {
  const isFocused = isListOn || searchInput;
  const isAllFocused = isListOn && searchInput;

  return (
    <Wrapper isFocused={isFocused}>
      <Input
        id="SearchBar"
        autoComplete="off"
        value={searchInput}
        onChange={handleSearchInput}
        isFocused={isFocused}
        isAllFocused={isAllFocused}
      />
      <Placeholder isFocused={isFocused}>
        <Icon
          isFocused={isFocused}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.5459 10.4101L11.5045 9.34749C11.2805 9.13535 10.9979 8.9948 10.6931 8.94389C10.3883 8.89298 10.0752 8.93404 9.79396 9.0618L9.34117 8.61071C9.87473 7.90045 10.1184 7.01519 10.0231 6.13314C9.92787 5.25108 9.50074 4.43773 8.82772 3.85681C8.15471 3.2759 7.28579 2.97055 6.39587 3.00224C5.50596 3.03393 4.66114 3.40031 4.03148 4.02761C3.40181 4.65492 3.03406 5.49658 3.00225 6.38316C2.97044 7.26973 3.27694 8.1354 3.86004 8.8059C4.44314 9.47639 5.25955 9.90192 6.14492 9.99683C7.03029 10.0917 7.91887 9.84898 8.6318 9.31742L9.07956 9.7635C8.93622 10.044 8.88485 10.3622 8.93269 10.6734C8.98053 10.9845 9.12516 11.2728 9.3462 11.4977L10.4128 12.5603C10.6958 12.8418 11.0794 13 11.4793 13C11.8793 13 12.2629 12.8418 12.5459 12.5603C12.6896 12.4202 12.8039 12.253 12.8818 12.0684C12.9598 11.8837 13 11.6855 13 11.4852C13 11.2849 12.9598 11.0866 12.8818 10.902C12.8039 10.7173 12.6896 10.5501 12.5459 10.4101ZM8.27964 8.28492C7.92759 8.63477 7.47936 8.87282 6.99158 8.969C6.5038 9.06518 5.99834 9.01518 5.53907 8.82532C5.0798 8.63546 4.68731 8.31425 4.41118 7.90226C4.13506 7.49028 3.98769 7.00601 3.98769 6.51063C3.98769 6.01525 4.13506 5.53098 4.41118 5.119C4.68731 4.70702 5.0798 4.3858 5.53907 4.19594C5.99834 4.00608 6.5038 3.95608 6.99158 4.05226C7.47936 4.14845 7.92759 4.3865 8.27964 4.73634C8.51389 4.96913 8.69975 5.24568 8.82656 5.55014C8.95338 5.8546 9.01865 6.181 9.01865 6.51063C9.01865 6.84026 8.95338 7.16666 8.82656 7.47112C8.69975 7.77558 8.51389 8.05213 8.27964 8.28492ZM11.8365 11.8285C11.7898 11.8755 11.7341 11.9128 11.6728 11.9382C11.6115 11.9636 11.5457 11.9767 11.4793 11.9767C11.4129 11.9767 11.3472 11.9636 11.2858 11.9382C11.2245 11.9128 11.1689 11.8755 11.1221 11.8285L10.0556 10.7659C10.0084 10.7193 9.97098 10.6639 9.94544 10.6028C9.9199 10.5417 9.90675 10.4762 9.90675 10.4101C9.90675 10.3439 9.9199 10.2784 9.94544 10.2173C9.97098 10.1562 10.0084 10.1008 10.0556 10.0542C10.1023 10.0072 10.158 9.96993 10.2193 9.94449C10.2806 9.91904 10.3463 9.90594 10.4128 9.90594C10.4792 9.90594 10.5449 9.91904 10.6062 9.94449C10.6676 9.96993 10.7232 10.0072 10.77 10.0542L11.8365 11.1168C11.8837 11.1634 11.9211 11.2188 11.9466 11.2799C11.9722 11.341 11.9853 11.4065 11.9853 11.4726C11.9853 11.5388 11.9722 11.6043 11.9466 11.6654C11.9211 11.7265 11.8837 11.7819 11.8365 11.8285Z" />
        </Icon>
        <Text searchInput={searchInput} isFocused={isFocused}>
          Search Keyword
        </Text>
      </Placeholder>
      <Delbutton
        isFocused={isFocused}
        onClick={() => setSearchInput('')}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8.70449 7.99957L11.8522 4.85652C11.9463 4.76242 11.9991 4.6348 11.9991 4.50174C11.9991 4.36867 11.9463 4.24105 11.8522 4.14696C11.7581 4.05286 11.6305 4 11.4975 4C11.3644 4 11.2368 4.05286 11.1427 4.14696L8 7.29501L4.85728 4.14696C4.76319 4.05286 4.63559 4 4.50253 4C4.36948 4 4.24188 4.05286 4.14779 4.14696C4.05371 4.24105 4.00085 4.36867 4.00085 4.50174C4.00085 4.6348 4.05371 4.76242 4.14779 4.85652L7.29551 7.99957L4.14779 11.1426C4.10096 11.1891 4.06379 11.2443 4.03843 11.3052C4.01306 11.3661 4 11.4314 4 11.4974C4 11.5634 4.01306 11.6287 4.03843 11.6896C4.06379 11.7505 4.10096 11.8057 4.14779 11.8522C4.19424 11.899 4.2495 11.9362 4.31039 11.9616C4.37127 11.9869 4.43658 12 4.50253 12C4.56849 12 4.6338 11.9869 4.69468 11.9616C4.75557 11.9362 4.81083 11.899 4.85728 11.8522L8 8.70414L11.1427 11.8522C11.1892 11.899 11.2444 11.9362 11.3053 11.9616C11.3662 11.9869 11.4315 12 11.4975 12C11.5634 12 11.6287 11.9869 11.6896 11.9616C11.7505 11.9362 11.8058 11.899 11.8522 11.8522C11.899 11.8057 11.9362 11.7505 11.9616 11.6896C11.9869 11.6287 12 11.5634 12 11.4974C12 11.4314 11.9869 11.3661 11.9616 11.3052C11.9362 11.2443 11.899 11.1891 11.8522 11.1426L8.70449 7.99957Z"
          fill="#3C6DBA"
        />
      </Delbutton>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.form`
  position: relative;

  &:hover {
    transform: ${({ isFocused }) => !isFocused && 'translateY(-1px)'};
    transition: 0.25s;
  }
`;

const Input = styled.input`
  padding-left: 2.2rem;
  width: 100%;
  height: 40px;
  border: 0.5px solid
    ${({ theme, isFocused }) =>
      isFocused ? theme.pb.midBlue : theme.pb.lightGrey};
  box-shadow: 0px 1px 3px rgba(9, 16, 55, 0.4);
  border-radius: 20px;
  text-align: left;
  line-height: 16px;
  font-size: 1rem;
  background-color: inherit;
  color: ${({ theme }) => theme.pb.midBlue};

  &:hover {
    box-shadow: 0px ${({ isFocused }) => !isFocused && '3px 7px'}
      rgba(9, 16, 55, 0.4);
  }
`;

const Placeholder = styled.label`
  display: flex;
  align-items: center;
  position: absolute;
  top: 12px;
  left: ${({ isFocused }) => (isFocused ? '0%' : '50%')};
  z-index: -1;
  transform: ${({ isFocused }) =>
    isFocused ? 'translate(12%)' : 'translate(-50%)'};
  transition: 0.5s;
`;

const Icon = styled.svg`
  margin-right: 0.5rem;
  width: 0.9rem;
  fill: ${({ theme, isFocused }) =>
    isFocused ? theme.pb.midBlue : theme.pb.grey};
  transition: 0.5s;
`;

const Text = styled.p`
  padding-top: 1.8px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.pb.grey};
  opacity: ${({ searchInput }) => (searchInput ? 0 : 1)};
`;

const Delbutton = styled.svg`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  opacity: ${({ isFocused }) => (!isFocused ? 0 : 1)};
  cursor: pointer;
  transition: 0.5s;
`;
