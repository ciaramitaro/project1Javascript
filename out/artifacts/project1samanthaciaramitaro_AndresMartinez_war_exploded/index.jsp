<%--
  Created by IntelliJ IDEA.
  User: sam
  Date: 9/19/2018
  Time: 2:30 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Enter your Information!</title>
    <script src="JS/user.js"></script>
    <link rel="stylesheet" href="CSS/formstyle.css">
  </head>
  <body>
  <div>
  <form id="user_form" name="user_form">
    <label for="fName" >First name: </label>
    <input type="text" id="fName" name="fName">
    <br>

    <label for="lName" >Last name: </label>
    <input type="text" id="lName" name="lName">
    <br>

    <label for="dob" >Date of birth: </label>
    <input type="date" id="dob" name="dob" >
    <br>

    <label for="email" >Email: </label>
    <input type="email" id="email" name="email">
    <br>

    <label for="password" >Password: </label>
    <input type="password" id="password" name="password">
    <br>

    <label for="verifyPassword" >Retype password: </label>
    <input type="password" id="verifyPassword" name="verifyPassword">
    <br>
    <input type="button" id="submit" value="Submit" >
    <input type="button" id="clear" value="Clear" >
  </form>
  </div>
  <p id="display_user"></p>
  </body>
</html>
