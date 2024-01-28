// Spinner.js
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.35); 
  backdrop-filter: blur(6px); 
  -webkit-backdrop-filter: blur(6px); 
  z-index: 9999;
  -webkit-animation: fadeIn 0.25s linear; 
  animation: fadeIn 0.25s linear; 
`;

const LoadingSpinner = styled.div`
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #4477CE transparent #55c1ff transparent;
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <LoadingSpinner />
    </SpinnerContainer>
  );
}

export default Spinner;
