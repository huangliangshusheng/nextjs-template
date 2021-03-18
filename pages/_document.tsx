import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body className="bg-white dark:bg-black text-black dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}