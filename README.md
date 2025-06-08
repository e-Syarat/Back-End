## 1. Login

### Endpoint:
`/api/login`

### Method:
`POST`

### Request Body:

    status: 200

```json
{
    "username": "string",
    "password": "string"
}
```

### Response Success:

    status: 200

```json
{
    "message": "Login successful",
    "token": "string"
}
```

### Response Error:

    status: 400(Bad request)

```json
{
    "message": "Email dan password harus diisi"
}
```

    status: 429(Too Many Requests)
    
```json
{
    "message": "Terlalu banyak percobaan login. Silakan coba lagi dalam 15 menit."
}
```

## 2. Get dictionary

### Endpoint

`/api/dictionary`

### Method

`GET`

### Request Header

    Authorization: Bearer token

### Response Success

    status: 200

```json
    {
    "status": "ok",
	"data": 
		{
			"id": 1,
			"image": "http://localhost:8000/alfabet/A.png",
			"alfabet": "A"
		}
    }
```

### Response Error

    status: 401(Unauthorized)

```json
    {
        "error": "Invalid or expired token"
    }
```

    status: 500(Internal Server Error)

```json
    {
        "msg": "Something went wrong"
    }
```

## 3. get dictionary:id

### Endpoint

`/api/dictionary/:id`

### Method

`GET`

### Request Header

    Authorization: Bearer token


###  Response Success

    status: 200

```json
    {
    "status": "ok",
	"data": 
		{
			"id": 1,
			"image": "http://localhost:8000/alfabet/A.png",
			"alfabet": "A"
		}
    }
```

### Response Error

    status: 401(Unauthorized)

```json
    {
        "error": "Invalid or expired token"
    }
```

    status : 500(Internal Server Error)

```json
    {
        "msg": "Something went wrong"
    }
```

## 4. get dictionary number

### Endpoint

`/api/dictionary-number`

### Method

`GET`

### Request Header

    Authorization: Bearer token

### Response Success

    status: 200

```json
    {
    "status": "ok",
	"data":
		{
			"id": 1,
			"image": "http://localhost:8000/number/1.png",
			"number": "1"
		}
    }
```

### Response Error

        status: 401(Unauthorized)

```json
    {
        "error": "Invalid or expired token"
    }
```

        status: 500(Internal Server Error)
```json
    {
        "msg": "Something went wrong"
    }
```

## 5. get dictionary number by id

### Endpoint

`/api/dictionary-number/:id`

### Method

`GET`

### Request Header

    Authorization: Bearer token

### Response Success

    status: 200

```json
    {
    "status": "ok",
	"data":
		{
			"id": 1,
			"image": "http://localhost:8000/number/1.png",
			"number": "1"
		}
    }
```

### Response Error

        status: 401(Unauthorized)

```json
    {
        "error": "Invalid or expired token"
    }
```

        status: 500(Internal Server Error)
```json
    {
        "msg": "Something went wrong"
    }
```

## 6. get quiz

### Endpoint

`/api/quiz`

### Method

`GET`

### Request Header

    Authorization: Bearer token

### Response Success

    status: 200

```json
    {
    "status": "ok",
	"data":
		{
			"id": 1,
			"image": "http://localhost:8000/alfabet/A.png",
			"question": "Huruf apakah yang ada pada gambar di atas?",
			"opsi1": "B",
			"opsi2": "C",
			"opsi3": "A",
			"opsi4": "D"
		}
    }
```

### Response Error

        status: 401(Unauthorized)

```json
    {
        "error": "Invalid or expired token"
    }
```

        status: 500(Internal Server Error)
```json
    {
        "msg": "Something went wrong"
    }
```

## 7. about

### Endpoint

`/api/about`

### Method

`GET`

### Response Success

```json
{
    "status": "ok",
	"data": [
		{
			"id": 1,
			"description": "string",
			"team": "string",
			"visi": "string",
			"misi": "string"
		}
	]
}
```

### Response Error
    status: 500(Internal Server Error)

