import React from "react";
// 라우팅에 사용할 라이브러리
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";

const AppRouter = () => {

    return (
        <Routes>
            {/* '/' 경로로 요청하면 App컴포넌트를 렌더링하세요 */}
            <Route path="/" element={<App />} />
            {/* '/login' 경로로 요청하면 Login컴포넌트를 렌더링하세요 */}
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default AppRouter;