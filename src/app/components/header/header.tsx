import Image from "next/image";
import "./header.scss"

export function Header() {
    return (
        <div className="header">
            <div>
                <h1>Hello, i'm Matheus!👋</h1>
                <h2>Developer Front End</h2>
            </div>
            <Image
                src="/me.jpg"
                alt="Next.js logo"
                width={325}
                height={310}
                priority
            />
            </div>
            )
}