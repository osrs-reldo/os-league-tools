import React from "react";
import NewsEntry from "../components/NewsEntry";

export default function Homepage() {
    return (
        <div
            style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "20px"
            }}
            className="content"
        >
            <NewsEntry title={'Test Entry'} htmlContent={'lorem ipsum whatever blah blah blah here is some <h2>inline</h2> <b>html</b> to see if that works'} />
        </div>
    );
}
