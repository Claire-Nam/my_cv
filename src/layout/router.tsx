import { Navigate, Route, Routes } from "react-router-dom";
import Resume from "../pages/resume";
import Letter from "../pages/letter";

const Content: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/resume" />} />
      <Route path="/resume" element={<Resume />}></Route>
      <Route path="/letter" element={<Letter />}></Route>
      <Route
        path="*"
        element={"페이지가 존재하지 않습니다. URL을 확인해주세요."}
      ></Route>
      {/* path="*"는 상기 지정한 패스 경로 이외의 모든 경로를 의미*/}
    </Routes>
  );
};

export default Content;
