const users = JSON.parse(localStorage.getItem('users')) || [];

localStorage.setItem('users', JSON.stringify([{ 'username': 'driver', 'password': '1234' },
{ 'username': 'passenger', 'password': '5678' }]));

$('#navbar').load('navbar.html');

$(document).ready(function () {

    $('form').submit(function (event) {
        event.preventDefault(); // Prevent the form from submitting
        // Get the username and password inputs
        var username = $('#username').val();
        var password = $('#password').val();
        if (username == 'driver' && password == '1234') {
            window.location.href = 'driver.html';
        } else if (username == 'passenger' && password == '5678') {
            window.location.href = 'passenger.html';
        }
        else {
            alert('Invalid username or password!');
        }
    });


    users.forEach(function (user) {
        $('#users tbody').append(`
          <tr>
            <td>${user.username}</td>
            <td>${user.password}</td>
          </tr>`
        );
    });


    setInterval(function () {
        $.getJSON('carData.json', function (data) {
            $('#speed').text(data.speed);
            $('#fuelLevel').text(data.fuelLevel);
            $('#batteryLevel').text(data.batteryLevel);
            $('#location').text(data.location);
        });
    }, 1000);


    $('#startButton').click(function () {
        alert('Engine started!');
    });

    $('#stopButton').click(function () {
        alert('Engine stopped!');
    });

    $('#lockButton').click(function () {
        alert('Doors locked!');
    });

    $('#unlockButton').click(function () {
        alert('Doors unlocked!');
    });

    $('#go-back-btn').click(function () {
        window.location.href = 'login.html';
    });

});
