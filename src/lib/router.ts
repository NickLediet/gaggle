//
// interface ControllerInterface {
//
// }
//
// interface RouteInterface {
//     /** The identifier of the route. */
//     name: string;
//
//     /** The object to act on the route. */
//     controller: ControllerInterface;
//
//     test: regex;
// }
//
// interface RouterArgsInterface {
//     /** The routes to register with the router. */
//     routes: RouteInterface[];
//
//     /** The attribute that should be checked for the route */
//     attribute: string;
//
//     /** The selector to a HTMLElement to be read for routing attributes */
//     context: string;
// }
export interface RouterConfig {
    context?: HTMLElement;
}

export default class Router {
    private _context: HTMLElement;

    constructor(config: RouterConfig) {
        this._context = config.context || null;
    }
}


