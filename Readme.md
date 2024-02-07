## Steps to run the server locally

1. Run `npm install` to install all the dependencies.

2. Run `npm run start` to start the server.

Note. Server will be started on port 3000.

## Technologies Used

<b>Database:</b> PostgresSQL (Hosted on heroku, since PlanetScale was not free)

<b>Backend:</b> Node.js (Express)

## API Request Curls

### 1. Candidate List

Request

```
curl 'http://localhost:3000/candidates' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7' \
  -H 'Connection: keep-alive' \
  -H 'If-None-Match: W/"306-Au6u3YM8lSG0+TGlBDPf7bdfsMI"' \
  -H 'Origin: http://localhost:3001' \
  -H 'Referer: http://localhost:3001/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed
```

Response

```
[
    {
        "id": 2,
        "name": "Manoj",
        "email": "manojselvin@gmail.com",
        "phone": "123123123",
        "skills": "[\"react_js\",\"java\"]",
        "status": "Contacted",
        "expected_salary": null,
        "node_experience": null,
        "react_experience": null,
        "node_score": 3,
        "react_score": 3,
        "total_score": 6
    },
    {
        "id": 3,
        "name": "zxczxc",
        "email": "zxczxczxc@asdasd.asdas",
        "phone": "12312312",
        "skills": "[\"react_js\",\"java\",\"php\"]",
        "status": "Contacted",
        "expected_salary": null,
        "node_experience": null,
        "react_experience": null,
        "node_score": 3,
        "react_score": 3,
        "total_score": 6
    },
    {
        "id": 4,
        "name": "zxczxc",
        "email": "zxczxczxc@asdasd.asdas",
        "phone": "12312312",
        "skills": "[\"react_js\",\"java\",\"php\"]",
        "status": "Hired",
        "expected_salary": "10000.00",
        "node_experience": "11.00",
        "react_experience": "12.00",
        "node_score": 3,
        "react_score": 3,
        "total_score": 6
    }
]
```

### 2. Update Candidate Status

Request

```
curl 'http://localhost:3000/candidates' \
  -X 'PUT' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:3001' \
  -H 'Referer: http://localhost:3001/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"id":4,"status":"Hired","showEditUserModal":true}' \
  --compressed
```

Response

```
{"message":"Candidate updated successfully"}
```

### 3. Add a new Candidate

Request

```
curl 'http://localhost:3000/candidates' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:3001' \
  -H 'Referer: http://localhost:3001/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"name":"Manoj Selvin","email":"manojselvin@gmail.com","phone":"9702437247","skills":["node_js","react_js","php"],"status":"Hired","expected_salary":"90000","node_experience":"6","react_experience":"5"}' \
  --compressed
```

Response

```
{"message":"Candidate created successfully"}
```