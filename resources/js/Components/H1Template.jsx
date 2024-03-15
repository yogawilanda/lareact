export function H1Template({ content }) {

    return <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
        {content ? content : "Welcome to Occupio"}
    </h1>;
}