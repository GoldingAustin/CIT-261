        var users = [];

        function User() {
            this.age = 0;
            this.name = " ";
            this.pet = " ";
        }

        User.prototype.set = function(age, name, pet) {
            this.age = age;
            this.name = name;
            this.pet = pet;
        }

        function newUser() {
            User.call(this);
        }

        function protoNewUser() {
            newUser.prototype = Object.create(User.prototype);
            newUser.prototype.constructor = newUser;
        }

        function searchUser() {
            var name = document.getElementById("nameS").value;
            document.getElementById("error").innerHTML = " ";
            if (name in users) {
                display(name);
                document.getElementById("error").innerHTML = "User Found!";
            } else {
                document.getElementById("error").innerHTML = "Sorry User Does Not Exist";
            }
        }

        function createUser() {
            var name = document.getElementById("nameI").value;
            var age = document.getElementById("ageI").value;
            var pet = document.getElementById("petI").value;
            document.getElementById("error").innerHTML = " ";
            protoNewUser();
            var user = new newUser();
            user.set(age, name, pet);
            users[name] = user;
            display(name);
        }

        function display(name) {
            var userName = document.getElementById("name");
            var userAge = document.getElementById("age");
            var userPet = document.getElementById("pet");
            clear();

            userName.innerHTML += users[name].name;
            userAge.innerHTML += users[name].age;
            userPet.innerHTML += users[name].pet;
        }

        function clear() {
            document.getElementById("name").innerHTML = "Name: ";
            document.getElementById("age").innerHTML = "Age: "
            document.getElementById("pet").innerHTML = "Pet: "
        }