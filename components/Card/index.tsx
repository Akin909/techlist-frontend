import * as React from "react";
import { Card } from "./styles";
import Link from "next/link";

interface IProps {
    title: string;
}

export default ({ title }: IProps) =>
    <Link href={{ pathname: "/article", query: { article: title } }}>
        <Card>
            <h3>{title}</h3>
            Elit obcaecati asperiores neque iste quam consequatur fugit hic! Alias quidem est
            repellat officiis autem unde a. Beatae vero delectus obcaecati excepturi nobis ab rem.
            Dolorum vel in maiores facere?
        </Card>
    </Link>;
