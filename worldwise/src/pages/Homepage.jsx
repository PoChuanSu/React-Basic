import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Hoempage() {
    return (
        <div>
            <PageNav />
            <AppNav />
            <h1>WorldWise</h1>
        </div>
    );
}
export default Hoempage;
