# Planning

This is just a rough area to map out the direction I want to take this.


### Development experience
```js

// how I see things working
class MyCustomRouteController extends BaseController {
    execute(router) {
        //
    }
}

const routes = [
    {
        name: 'MyCustomRoute',
        controller: MyCustomRouteController,
        value: 'page-front' // or a regex, or function that returns true/false
    }
];

const router = new GaggleRouter({
    context: document.querySelector('body'),
    attribute: 'class',
    middleware: [], // Array of functions
    routes
});
```
