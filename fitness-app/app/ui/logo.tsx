import { HeartIcon } from "@heroicons/react/24/solid";

export default function Logo() {
    return (
        <div
        className="flex flex-row items-center leading-none text-white space-x-2"
        >
            <HeartIcon className="h-12 w-12" />
            <p className="text-[44px]">The Health App</p>
        </div>
    );
}