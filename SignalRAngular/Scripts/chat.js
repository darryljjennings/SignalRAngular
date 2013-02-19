function chatCtrl($scope) {
    $scope.messages = [];

    // proxy created on the fly          
    var chat = $.connection.chat;

    // declare a receive function on the chat hub so the server can invoke it          
    chat.client.receive = function (message) {
        // allow receive to update angular model outside of angular context w/ $apply
        $scope.$apply($scope.messages.push({ text:message, datetime:new Date() }));
    };

    // start the connection
    $.connection.hub.start();

    $scope.broadcast = function () {
        chat.server.send($scope.message);
        $scope.message = "";
    };
}