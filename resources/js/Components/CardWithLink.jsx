import { Link } from "@nextui-org/react";
import ArrowIcon from "@/Components/svg/ArrowIcon";
import VideoIcon from "./svg/VideoIcon";
import ShopCartIcon from "./svg/ShopCartIcon";

export function CardWithLink({ title, content, link }) {
    return <Link
        className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500 relative"
        href={link ? link : "#"}
    >

        {/* Content */}
        <div>
            {/* Video SVG Icons */}
            <VideoIcon />
            {/* <ShopCartIcon/> */}


            {/* Title */}
            <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                {title ? title : "Untitled"}
            </h2>

            {/* Content */}
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {content ? content : "No Content"}
            </p>
        </div>

        {/* Arrow icon */}
        <ArrowIcon />
    </Link>
        ;
}