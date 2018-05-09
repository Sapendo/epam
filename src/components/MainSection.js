import React from "react";
import { Link } from "react-router-dom";
// import KnowledgeBase from "./KnowledgeBase";
// import Chat from "./Chat";

class MainSection extends React.Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <li>
                        Hello
                        <Link to="/">blaaaa</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MainSection;