import Title from "../../components/Title/Title";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import TaskButton from "../../components/TaskButton/TaskButton";
import Header from "../../components/Header/Header";
import React from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
function Home() {
    return (
        <div className="home-container">
            <div className="home-box">
                <Header title="Home" />
                <Title />

                <div className="button-container">
                    <TaskButton />
                    <LogoutButton />
                </div>

            </div>
            <Footer
                textColor="#fff"
                bgColor="#2d2d2d88"
                linkColor="#2e7d32"
            />
        </div>
    )
}

export default Home