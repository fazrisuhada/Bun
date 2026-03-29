# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :
```json
{
    "username" : "admin",
    "password" : "rahasia",
    "name" : "Administrator"
}
```

Response (Success) :
```json
{
    "data" :{
        "username" : "admin",
        "name" : "Administrator"
    }
}
```

Response (Error):
```json
{
    "errors" : "username is not empty"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :
```json
{
    "username" : "admin",
    "password" : "rahasia",
    "token" : "token"
}
```

Response (Success) :
```json
{
    "data" :{
        "username" : "admin",
        "name" : "Administrator"
    }
}
```

Response (Error):
```json
{
    "errors" : "login failed"
}
```

## Get User

Endpoint : GET /api/users/current

Request Header :
- Authorization : token

Response (Success) :
```json
{
    "data" :{
        "username" : "admin",
        "name" : "Administrator"
    }
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :
- Authorization : token

Request Body:
```json
{
    "data" :{
        "username" : "jika update username",
        "password" : "jika update password"
    }
}
```

Response (Success) :
```json
{
    "data" :{
        "username" : "admin",
        "name" : "Administrator"
    }
}
```

## Logout User

Endpoint : DELETE /api/users/current

Request Header :
- Authorization : token

Response (Success) :
```json
{
    "data" :{
        true
    }
}
```