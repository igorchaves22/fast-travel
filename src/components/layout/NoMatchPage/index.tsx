import { Link } from "react-router";
import type { NoMatchPageProps } from "./types";

export const NoMatchPage = ({ title, description, link }: NoMatchPageProps) => (
    <section>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <Link to={link.href}>{link.label}</Link>
    </section>
);
