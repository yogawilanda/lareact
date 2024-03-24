export default function Footer({author, laravelVersion, phpVersion}) {
    return (
        <div className="flex justify-center mt-16 px-6 sm:items-center sm:justify-between">
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-end sm:ms-0">
                {
                    "Made with ❤️ by " + author + " | Powered by Laravel and ReactJS v" + laravelVersion + " (PHP v" + phpVersion + ")"
                }
            </div>
        </div>
    );
}