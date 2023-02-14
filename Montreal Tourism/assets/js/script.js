function validate_user()
{
    var name = document.getElementById("visitorName").value;
    // if name is null or "your name", display alert.
    if (name == "")
    {
        alert("Name must be filled out");
        return false;
    }
    else
    {
        var regex = /^[ ]*[A-Z]([a-z]|(([ ]+|-)[A-Z]))*[ ]*$/;
        // if name is not string between lowercase(a~z) and uppercase(A~Z) or doesn't start uppercase letter,
        // display alert.
        if (!regex.test(name))
        {
            alert("Invalid name");
            return false;
        }
        else
        {
            // if there are repeated blanks, remove them.
            document.getElementById("visitorName").value = name.replace(/\s+/g, ' ');

            console.log(name.replace(/\s+/g, ' '));
            var sex = document.querySelector('input[name="visitor_sex"]:checked');

            if (!sex)
            {
                // if sex is not select, display alert
                alert("Birth sex must be chosen!");
                return false;
            }
            else
            {
                var age = document.getElementById("visitorAge").value;
                // if age is null, display alert
                if (!age)
                {
                    alert("Age must be filled out");
                    return false
                }
                else
                {
                    // if age is less than 18, more than 110 or age is not integer
                    //here Number.isInteger(age) idetify if age is integer
                    if (!(age >= 18 && age <= 110) || Number.isInteger(age) === "false")
                    {
                        alert("Age is invaild!");
                        return false;
                    }
                    else
                    {

                        var phone = document.getElementById("phone").value;
                        // if phone number is null, display alert.
                        if (!phone)
                        {
                            alert("Phone number is required!");
                            return false;
                        }
                        else
                        {
                            var regex = /^([0-9]{2})[-]?\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
                            // if phone number is not invalid phone number, display invalid message.
                            if (!regex.test(phone))
                            {
                                alert("Invalid phone number");
                                return false;
                            }
                            else
                            {
                                alert("Success!");
                            }
                        }
                    }
                }
            }
        }
    }
}