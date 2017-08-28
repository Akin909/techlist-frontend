import * as express from "express";
import * as next from "next";
import * as LRUCache from "lru-cache";

const dev = process.env.NODE_ENV !== "production";

const app = next({ dir: "./build", dev });
const handle = app.getRequestHandler();

// Cache rendered HTML pages
const ssrCache = new LRUCache({
    max: 100,
    maxAge: 1000 * 60 * 60, //1 hour
});

app.prepare().then(() => {
    const server = express();

    server.get("/", (req, res) => {
        renderAndCache(req, res, "/");
    });

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err: Error) => {
        if (err) throw err;
        console.log("> Ready on http://localhost:3000");
    });
});

function getCacheKey(req: express.Request) {
    return `${req.url}`;
}

function renderAndCache(
    req: express.Request,
    res: express.Response,
    pagePath: string,
    queryParams?: any,
) {
    const key = getCacheKey(req);

    if (ssrCache.has(key)) {
        console.log(`CACHE HIT: ${key}`);
        res.send(ssrCache.get(key));
        return;
    }

    app
        .renderToHTML(req, res, pagePath, queryParams)
        .then(html => {
            console.log(`CACHE MISS: ${key}`);
            ssrCache.set(key, html);
            res.send(html);
        })
        .catch(err => {
            app.renderError(err, req, res, pagePath, queryParams);
        });
}
