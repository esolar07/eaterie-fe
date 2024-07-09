import React from "react";
import '../globals.css';
import './charge.css';

export default function PageChargeLayout({
    children,}: {children: React.ReactNode}) {
    return (
        <section>
            <nav></nav>
            {children}
        </section>
    )
}