import { ReactNode } from "react";

export default function Layout({children}: {children: ReactNode}) {
    return (
        <div>
            <p> this is going to be on the top</p>
            {children}
        </div>
    )
}