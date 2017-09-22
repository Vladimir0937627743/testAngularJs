var productApp = angular.module('productApp', []);

productApp.controller('ValetListController', function ValetListController($scope) {
    $scope.products = [
        {
            image: 'images/img_large_1.jpg',
            h3: 'Web Developer',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
        }, {
            image: 'images/img_large_2.jpg',
            h3: 'User Experience',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
        }, {
            image: 'images/img_large_2.jpg',
            h3: 'Web Designer',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
        },
        {
            image: 'images/img_large_3.jpg',
            h3: 'Web Analyst',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
        }
    ];
});