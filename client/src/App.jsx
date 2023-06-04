import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });
import getStore from "./store";

const routes = [];
for (const path of Object.keys(pages)) {
    const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
    if (!fileName) {
        continue;
    }

    const normalizedPathName = fileName.includes("$")
        ? fileName.replace("$", ":")
        : fileName.replace(/\/index/, "");

    routes.push({
        path:
            fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
        Element: pages[path].default,
        loader: pages[path]?.loader,
        action: pages[path]?.action,
        ErrorBoundary: pages[path]?.ErrorBoundary,
    });
}

const router = createBrowserRouter(
    routes.map(({ Element, ErrorBoundary, ...rest }) => {
        return {
            ...rest,
            element: <Element {...rest} />,
            ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
        };
    })
);

const App = () => {
    return (
        <Provider store={getStore()}>
            <RouterProvider router={router} />
        </Provider>
    );
};

export default App;
