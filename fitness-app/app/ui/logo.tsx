import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

export default function Logo() {
    return (
        <div
        className="flex flex-row items-center leading-none text-white space-x-2"
        >
            <ArrowTrendingUpIcon className="h-12 w-12" />
            <p className="text-[44px]">F1tness</p>
        </div>
    );
}