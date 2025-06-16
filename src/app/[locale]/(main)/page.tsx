import styles from "./style.module.scss";
import Sidebar from "src/components/common/sidebar";

const Main = () => {
    return (
        <main className="main">
            <Sidebar />
            메인페이지입니다.
        </main>
    )
}

export default Main;