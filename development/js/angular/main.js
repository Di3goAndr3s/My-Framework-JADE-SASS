

function LoremController($scope) {



    $scope.enableModal = function() {
    $scope.showConfirm = true;
    $scope.showOverlay = true;
  };
  $scope.disableModal = function() {
    $scope.showConfirm = false;
    $scope.showOverlay = false;
  };
    $scope.isInvalid = function(field){
    return $scope.workForm[field].$invalid && $scope.workForm[field].$dirty;
  };
  $scope.isValid = function(field){
    return $scope.workForm[field].$valid && $scope.workForm[field].$dirty;
  };

   $scope.user = {
    name: 'Lorem ipsum dolor sit amet',
    email: 'loremipsum@dolorsit.com',
    telephone: '(57) + (1) 2345467',
    website: 'http://www.loremipsumdolor.com',
    twitter: '@loremipsum',
    zipcode: '57',
    description: ''


  };


  $scope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  $scope.date = '12/03/2014';
   $scope.year = '201';
     $scope.name = '';
    $scope.phone = '';
    $scope.mail = '';
  $scope.advertfile ='Adjunte su hoja de vida en formato .PDF o .DOC';

  }



angular.module('ng').filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });
