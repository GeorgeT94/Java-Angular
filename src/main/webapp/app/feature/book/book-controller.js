(function() {

    var BookController =  function() {

        var vm = this;

        vm.books = [{"author": "James Herbert", "genre": "horror"}, {"author": "Stephen King", "genre": "horror"}];

    };

    angular.module('accountApp').controller('bookController', [BookController]);
}());