import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body className="min-h-screen dark:bg-slate-900 dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}