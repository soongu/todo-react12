import React from "react";
// 라우팅에 사용할 라이브러리
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Header from "../components/Header";
import Join from "../components/Join";
import Login from "../components/Login";

const AppRouter = () => {

    return (
        <>
            <Header />
            <Routes>
                {/* '/' 경로로 요청하면 App컴포넌트를 렌더링하세요 */}
                <Route path="/" element={<App />} />
                {/* '/login' 경로로 요청하면 Login컴포넌트를 렌더링하세요 */}
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
            </Routes>    
        </>
    );
};

export default AppRouter;