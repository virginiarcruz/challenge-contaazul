export default function install (module)
{
    module.config(['$locationProvider', '$urlRouterProvider', ($locationProvider, $urlRouterProvider) => {
        // use the HTML5 History API
        $locationProvider.html5Mode(true);

        // if the path doesn't match any of the urls you configured
        // otherwise will take care of routing the user to the specified url
        $urlRouterProvider.otherwise('/home');
    }])

    module.config(['$stateProvider', ({ state }) => {

        state('home', {
            url: '/home',
            component: 'homePage'
        })

        state('fleet', {
            url: '/fleet',
            component: 'fleetPage'
        })
        
        state('about', {
            url: '/about',
            component: 'aboutPage'
        })

    }]);
}