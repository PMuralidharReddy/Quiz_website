var app = angular.module('quizApp', []);

app.controller('QuizController', function($scope, $interval) {
    $scope.questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
            answer: 'Paris'
        },
        {
            question: 'Who wrote "To Kill a Mockingbird"?',
            options: ['Harper Lee', 'J.K. Rowling', 'Jane Austen', 'Mark Twain'],
            answer: 'Harper Lee'
        },
        {
            question: 'What is the chemical symbol for gold?',
            options: ['Au', 'Ag', 'Pt', 'Pb'],
            answer: 'Au'
        },
        {
            question: 'Which planet is known as the Red Planet?',
            options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
            answer: 'Mars'
        },
        {
            question: 'What is the largest ocean on Earth?',
            options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
            answer: 'Pacific Ocean'
        },
        {
            question: 'Who painted the Mona Lisa?',
            options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
            answer: 'Leonardo da Vinci'
        },
        {
            question: 'In what year did the Titanic sink?',
            options: ['1912', '1915', '1905', '1920'],
            answer: '1912'
        },
        {
            question: 'What is the capital of Japan?',
            options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
            answer: 'Tokyo'
        },
        {
            question: 'Which element has the atomic number 1?',
            options: ['Oxygen', 'Hydrogen', 'Carbon', 'Helium'],
            answer: 'Hydrogen'
        },
        {
            question: 'Who was the first President of the United States?',
            options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
            answer: 'George Washington'
        }
    ];

    $scope.quizStarted = false;
    $scope.result = null;
    $scope.timeTaken = null;
    $scope.startTime = null;
    $scope.endTime = null;

    $scope.startQuiz = function() {
        $scope.quizStarted = true;
        $scope.startTime = new Date();
    };

    $scope.submitQuiz = function() {
        $scope.endTime = new Date();
        var score = 0;
        for (var i = 0; i < $scope.questions.length; i++) {
            if ($scope.questions[i].userAnswer === $scope.questions[i].answer) {
                score++;
            }
        }
        $scope.result = score;
        $scope.timeTaken = Math.floor(($scope.endTime - $scope.startTime) / 1000);
        $scope.quizStarted = false;
    };

    $scope.closePopup = function() {
        $scope.result = null;
        $scope.timeTaken = null;
    };

    $scope.currentTime = new Date();
    $interval(function() {
        $scope.currentTime = new Date();
    }, 1000);
});
