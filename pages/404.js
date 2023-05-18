import Link from "next/link";

export default function Page404(){
    return (
        <div>
            ERROR 404 not found
            <br/>
            <Link href="/" >back</Link>
        </div>
    )
}