import React from "react";
import BlogEntry from "../components/BlogEntry";
import NewsEntry from "../components/NewsEntry";
import newsPosts from '../resources/newsPosts.json';

export default function Homepage() {
    return (
        <div
            style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <h1 className="mt-2 light-text">News & Updates</h1>
            {newsPosts.map(newsPost => (
                newsPost.type === "news" ?
                    <NewsEntry
                        title={newsPost.title}
                        date={newsPost.date}
                        leadText={newsPost.leadText}
                        thumbnail={newsPost.thumbnail}
                        buttonLink={newsPost.buttonLink}
                        buttonText={newsPost.buttonText}
                    />
                    :
                    <BlogEntry
                        title={newsPost.title}
                        date={newsPost.date}
                        leadText={newsPost.leadText}
                        htmlContent={newsPost.htmlContent}
                    />
            ))}
        </div>
    );
}
