import Link from "next/link";

type NavigationProps = {
    backLink: string;
    nextLink: string;
};

export const Navigation: React.FC<NavigationProps> = ({ backLink, nextLink }) => (
    <div>
        <Link href={backLink}>Back</Link>
        <Link href={nextLink}>Next</Link>
    </div>
);
