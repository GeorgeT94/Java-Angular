(function() {

    var TraineeController =  function(dataService, $state) {
        
    	var vm = this;

    	vm.trainees = [
            {"name":"george", "subjects": ["java(5)", "javaScript(5)", "Databases(5)", "CI(5)", "Testing(5)"]},
            {"name":"Benny", "subjects": ["java(1)", "javaScript(1)", "Databases(1)", "CI(1)", "Testing(1)"]},
            {"name":"Sam", "subjects": ["java(3)", "javaScript(3)", "Databases(3)", "CI(3)", "Testing(3)"]},
            {"name":"Hussein", "subjects": ["java(4)", "javaScript(4)", "Databases(4)", "CI(4)", "Testing(4)"]},
            {"name":"Kate", "subjects": ["java(5)", "javaScript(4)", "Databases(3)", "CI(2)", "Testing(1)"]},
            {"name":"Jarad", "subjects": ["java(0)", "javaScript(0)", "Databases(0)", "CI(0)", "Testing(0)"]},
            {"name":"Chris", "subjects": ["java(2)", "javaScript(2)", "Databases(2)", "CI(2)", "Testing(2)"]},
            {"name":"Daryl", "subjects": ["java(4)", "javaScript(2)", "Databases(4)", "CI(3)", "Testing(3)"]}


        ];

        vm.passTrainee = function (data) {
            console.log("passtrainee function");
            console.log(data);
            vm.selectedTrainee = data;
            dataService.setData(data);
            $state.go("furtherinfo", { obj:  vm.selectedTrainee });
        }


    	vm.noNameFunction = function(){
    	    console.log("Allez les bleus");
        }
        vm.selectedTrainee = dataService.getData();
    };


    angular.module('accountApp').controller('traineeController', ['dataService', '$state', TraineeController]);
}());