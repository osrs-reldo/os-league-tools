import React from "react";
import NewsEntry from "../components/NewsEntry";

export default function Homepage() {
    return (
        <div
            style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
            }}
            className="content"
        >
            <NewsEntry title={'Test Entry'} leadText={'lorem ipsum whatever blah blah blah here'} htmlContent={'lorem ipsum whatever blah blah blah here is some <h2>inline</h2> <b>html</b> to see if that works'} thumbnail={'https://oldschool.runescape.wiki/images/a/a8/Leagues_II_-_Trailblazer_%281%29.png?2d320'} />
            <NewsEntry title={'Test Entry 2'} leadText={'this text is extra long'} htmlContent={'this text is extra long so long wow here we go do you want some lOrEm iPsUm cause YOU GOT IT BRO HERE WE GO Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'} />
        </div>
    );
}
