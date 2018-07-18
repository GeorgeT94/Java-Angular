"use strict";

(function() {

    var bookController =  function($log) {
        
    	var vm = this;
        
        vm.isHidden = false;
        
        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };
        
        function init() {
            vm.books =[
            {'title': 'To Kill A Mocking Bird', 'author':'Harper Lee', 'releaseYear': '1960'},
            {'title': 'Tale of Two Cities', 'author': 'Chales Dickens', 'releaseYear': '1859'},
            {'title':'Moby Dick', 'author':'Herman Melvile', 'releaseYear':'1851'},
            {'title':'The Brothers Karamasov', 'author':'Fyodor Dostoyevsky', 'releaseYear':'1880'},
            {'title':'Harry Potter and The Philosophers Stone', 'author':'J K Rowling', 'releaseYear':'1997'}
            ];
            vm.titleClicked = false;
            vm.authorClickerd = false;
            vm.yearClicked =false;
       }
       
       init();
            
    };

    angular.module('myApp').controller('bookController', ['$log', bookController]);
}());