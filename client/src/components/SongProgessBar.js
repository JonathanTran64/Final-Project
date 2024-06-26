import styled from "styled-components";

const SongProgressBar = ({ isPlaying, count, seconds, display }) => {
  return (
    <>
      {/* AUDIO BAR */}
      <ProgressBarWrapper>
        <ProgressBar>
          {/* Line Seconds Limit */}
          <LineWrapper
            $borderColor={
              count === 5 || display === "none"
                ? "var(--seconds)"
                : "var(--notSeconds)"
            }
          >
            <Line
              $width={"50px"}
              $borderColor={
                count === 0 ? "var(--seconds)" : "var(--notSeconds)"
              }
              $display={display === "none" ? "none" : "block"}
            ></Line>
            <Line
              $width={"95px"}
              $borderColor={
                count === 1 ? "var(--seconds)" : "var(--notSeconds)"
              }
              $display={display === "none" ? "none" : "block"}
            ></Line>
            <Line
              $width={"185px"}
              $borderColor={
                count === 2 ? "var(--seconds)" : "var(--notSeconds)"
              }
              $display={display === "none" ? "none" : "block"}
            ></Line>
            <Line
              $width={"315px"}
              $borderColor={
                count === 3 ? "var(--seconds)" : "var(--notSeconds)"
              }
              $display={display === "none" ? "none" : "block"}
            ></Line>
            <Line
              $width={"487px"}
              $borderColor={
                count === 4 ? "var(--seconds)" : "var(--notSeconds)"
              }
              $display={display === "none" ? "none" : "block"}
            ></Line>
          </LineWrapper>
          {/* BAR ANIMATION */}
          <Player $isPlaying={isPlaying} $seconds={seconds}></Player>
          {/* Grey background when skipped */}
          <SkipWrapper>
            <Skipped
              $width={
                count === 0
                  ? "50px"
                  : count === 1
                  ? "95px"
                  : count === 2
                  ? "185px"
                  : count === 3
                  ? "315px"
                  : count === 4
                  ? "487px"
                  : count === 5
                  ? "700px"
                  : ""
              }
            ></Skipped>
          </SkipWrapper>
        </ProgressBar>
      </ProgressBarWrapper>
    </>
  );
};

const SkipWrapper = styled.div`
  position: relative;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  z-index: 0;
`;

const Skipped = styled.div`
  position: absolute;
  width: ${(props) => props.$width};
  height: 15px;
  background-color: var(--skipWidth);
`;

const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px var(--seconds) solid;
  width: 100%;
  height: 15px;
`;

const ProgressBar = styled.div`
  border-right: 1px solid black;
  height: 15px;
  width: 700px;
  margin-bottom: 10px;
`;

const Player = styled.div`
  position: relative;
  bottom: 15px;
  background-color: var(--submit);
  width: 5px;
  height: 100%;
  animation: ${({ $isPlaying }) => ($isPlaying ? "slide" : "none")}
    ${(props) => props.$seconds} linear;
  z-index: 1;
  @keyframes slide {
    from {
      width: 5px;
    }
    to {
      width: 100%;
    }
  }
`;

const LineWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-right: 1px ${(props) => props.$borderColor} solid;
`;

const Line = styled.div`
  display: ${(props) => props.$display};
  position: absolute;
  height: 100%;
  width: ${(props) => props.$width};
  border-right: 1px ${(props) => props.$borderColor} solid;
  z-index: 2;
`;

export default SongProgressBar;
