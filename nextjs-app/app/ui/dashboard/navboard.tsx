{/* Side navigation board to navigate between the differnet elements in the application
- Rescale to the bottom of the screen on phones and jsut use icons and no text
*/}

import Link from "next/link";
import NavLinks from "./nav-links";

export default function NavBoard() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
                href="/dashboard"
            >
                <div className="w-32 text-white md:w-40">
                    <p>F1tness</p>
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavBoard />
            </div>
        </div>
    );
}