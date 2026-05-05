# Address API Spec

## Create Address

Endpoint : POST /api/contacts/{idContact}/addresses

Request Header :
- Authorization : token

Request Body :
```json
{
    "street" : "Jl.Baru",
    "city" : "Bandung",
    "province" : "Jawa Barat",
    "country" : "Indonesia",
    "postal_code": "7324"
}
```

Response (Success) :
```json
{
    "data" :{
        "id" : 1,
        "street" : "Jl.Baru",
        "city" : "Bandung",
        "province" : "Jawa Barat",
        "country" : "Indonesia",
        "postal_code": "7324"
    }
}
```

Response (Error):
```json
{
    "errors" : "city is not empty"
}
```


## Get Address

Endpoint : GET /api/contacts/{idContact}/addresses/{idAdresses}

Request Header :
- Authorization : token

Response (Success) :
```json
{
    "data" :{
        "id" : 1,
        "street" : "Jl.Baru",
        "city" : "Bandung",
        "province" : "Jawa Barat",
        "country" : "Indonesia",
        "postal_code": "7324"
    }
}
```

## Update Address

Endpoint : PUT /api/contacts/{idContact}/addresses/{idAddresses}

Request Header :
- Authorization : token

Request Body :
```json
{
    "street" : "Jl.Baru",
    "city" : "Bandung",
    "province" : "Jawa Barat",
    "country" : "Indonesia",
    "postal_code": "7324"
}
```

Response (Success) :
```json
{
    "data" :{
        "id" : 1,
        "street" : "Jl.Baru",
        "city" : "Bandung",
        "province" : "Jawa Barat",
        "country" : "Indonesia",
        "postal_code": "7324"
    }
}
```

Response (Error):
```json
{
    "errors" : "city is not empty"
}
```

## Remove Address

Endpoint : DELETE /api/contacts/{idContact}/addresses/{idAddresses}

Request Header :
- Authorization : token

Response (Success) :
```json
{
    "data" : true
}
```

## List Address

Endpoint : GET /api/contacts/{idContact}/addresses

Request Header :
- Authorization : token

Response Body 
```json
{
    "data" : [
        {
            "id" : 1,
            "street" : "Jl.Baru",
            "city" : "Bandung",
            "province" : "Jawa Barat",
            "country" : "Indonesia",
            "postal_code": "7324"
        },
        {
            "id" : 2,
            "street" : "Jl.Lama",
            "city" : "Bandung",
            "province" : "Jawa Barat",
            "country" : "Indonesia",
            "postal_code": "7324"
        }
    ],
    "pagging" : {
        "current_page" : 1,
        "total_page" : 10,
        "size" :10
    }
}
```