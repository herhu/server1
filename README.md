# BeddoPMS

## Indices

*   [auth](#auth)

    *   [/forgot](#1-forgot)
    *   [/login](#2-login)
    *   [/register](#3-register)
    *   [/reset](#4-reset)
    *   [/token](#5-token)
    *   [/verify](#6-verify)

*   [bed statuses](#bed-statuses)

    *   [/bedStatuses](#1-bedstatuses)
    *   [/bedStatuses](#2-bedstatuses)
    *   [/bedStatuses/:id](#3-bedstatuses:id)
    *   [/bedStatuses/:id](#4-bedstatuses:id)
    *   [/bedStatuses/:id](#5-bedstatuses:id)
    *   [/bedStatuses/all](#6-bedstatusesall)

*   [booking statuses](#booking-statuses)

    *   [/bookingStatuses](#1-bookingstatuses)
    *   [/bookingStatuses](#2-bookingstatuses)
    *   [/bookingStatuses/:id](#3-bookingstatuses:id)
    *   [/bookingStatuses/:id](#4-bookingstatuses:id)
    *   [/bookingStatuses/:id](#5-bookingstatuses:id)
    *   [/bookingStatuses/all](#6-bookingstatusesall)

*   [bookings](#bookings)

    *   [/bookings](#1-bookings)
    *   [/bookings](#2-bookings)
    *   [/bookings/:id](#3-bookings:id)
    *   [/bookings/:id](#4-bookings:id)
    *   [/bookings/:id](#5-bookings:id)
    *   [/bookings/all](#6-bookingsall)

*   [companies](#companies)

    *   [/cities](#1-cities)
    *   [/cities](#2-cities)
    *   [/cities/:id](#3-cities:id)
    *   [/cities/:id](#4-cities:id)
    *   [/cities/:id](#5-cities:id)
    *   [/cities/all](#6-citiesall)

*   [employees](#employees)

    *   [/employees](#1-employees)
    *   [/employees](#2-employees)
    *   [/employees/:id](#3-employees:id)
    *   [/employees/:id](#4-employees:id)
    *   [/employees/:id](#5-employees:id)
    *   [/employees/all](#6-employeesall)

*   [establishments](#establishments)

    *   [/establishments](#1-establishments)
    *   [/establishments](#2-establishments)
    *   [/establishments/:id](#3-establishments:id)
    *   [/establishments/:id](#4-establishments:id)
    *   [/establishments/:id](#5-establishments:id)
    *   [/establishments/all](#6-establishmentsall)

*   [managements](#managements)

    *   [/managements](#1-managements)
    *   [/managements](#2-managements)
    *   [/managements/:id](#3-managements:id)
    *   [/managements/:id](#4-managements:id)
    *   [/managements/:id](#5-managements:id)
    *   [/managements/all](#6-managementsall)

*   [users](#users)

    *   [/users](#1-users)
    *   [/users](#2-users)
    *   [/users/:id](#3-users:id)
    *   [/users/:id](#4-users:id)
    *   [/users/:id](#5-users:id)

***

## auth

### 1. /forgot

***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/forgot
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/x-www-form-urlencoded |  |
| Accept-Language | en |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| email | admin@admin.com |  |

### 2. /login

***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/login
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| email | herhuglz@gmail.com |  |
| password | 12345 |  |

### 3. /register

***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/register
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/x-www-form-urlencoded |  |
| Accept-Language | en |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| name | My Name |  |
| email | my@email.com |  |
| password | 12345 |  |

### 4. /reset

***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/reset
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | f5b08991-02fc-4f3d-9a32-6d703bef5c57 |  |
| password | 12345 |  |

### 5. /token

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/token
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

### 6. /verify

***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/verify
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | b98b1dea-b3f4-4b72-bcdf-9d36607e2603 |  |

## bed statuses

### 1. /bedStatuses

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bedStatuses
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| filter | Bucaramanga |  |
| fields | name |  |
| page | 1 |  |
| limit | 5 |  |
| sort | name |  |
| order | 1 |  |

### 2. /bedStatuses

***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bedStatuses
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| status | Miami |  |
| code |  |  |
| color |  |  |

### 3. /bedStatuses/:id

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bedStatuses/5bd08db979bbc504c14ebfdd
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Accept-Language | es |  |

### 4. /bedStatuses/:id

***Endpoint:***

```bash
Method: PATCH
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bedStatuses/5bd08db979bbc504c14ebfdd
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| status | Miami |  |
| code |  |  |
| color |  |  |

### 5. /bedStatuses/:id

***Endpoint:***

```bash
Method: DELETE
Type: FORMDATA
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bedStatuses/5b38171b1843d58427c5d6c4
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
|  |  |  |

### 6. /bedStatuses/all

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bedStatuses/all
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

## booking statuses

### 1. /bookingStatuses

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bookingStatuses
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| filter | Bucaramanga |  |
| fields | name |  |
| page | 1 |  |
| limit | 5 |  |
| sort | name |  |
| order | 1 |  |

### 2. /bookingStatuses

***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bookingStatuses
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| code | Miami |  |
| status |  |  |
| descInventory |  |  |

### 3. /bookingStatuses/:id

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bookingStatuses/5bd08db979bbc504c14ebfdd
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Accept-Language | es |  |

### 4. /bookingStatuses/:id

***Endpoint:***

```bash
Method: PATCH
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bookingStatuses/5bd08db979bbc504c14ebfdd
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| code | Miami |  |
| status |  |  |
| descInventory |  |  |

### 5. /bookingStatuses/:id

***Endpoint:***

```bash
Method: DELETE
Type: FORMDATA
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bookingStatuses/5b38171b1843d58427c5d6c4
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

### 6. /bookingStatuses/all

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bookingStatuses/all
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

## bookings

### 1. /bookings

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bookings
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| filter | Bucaramanga |  |
| fields | name |  |
| page | 1 |  |
| limit | 5 |  |
| sort | name |  |
| order | 1 |  |

### 2. /bookings

***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bookings
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| code |  |  |
| employeeName |  |  |
| employeeRut |  |  |
| sap |  |  |
| management |  |  |
| company |  |  |
| bedNumber |  |  |
| checkIn |  |  |
| checkOut |  |  |
| Establishment |  |  |
| bookingStatus |  |  |
| Notes |  |  |

### 3. /bookings/:id

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bookings/5bd08db979bbc504c14ebfdd
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Accept-Language | es |  |

### 4. /bookings/:id

***Endpoint:***

```bash
Method: PATCH
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bookings/5bd08db979bbc504c14ebfdd
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| code |  |  |
| employeeName |  |  |
| employeeRut |  |  |
| sap |  |  |
| management |  |  |
| company |  |  |
| bedNumber |  |  |
| checkIn |  |  |
| checkOut |  |  |
| Establishment |  |  |
| bookingStatus |  |  |
| Notes |  |  |

### 5. /bookings/:id

***Endpoint:***

```bash
Method: DELETE
Type: FORMDATA
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bookings/5b38171b1843d58427c5d6c4
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

### 6. /bookings/all

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/bookings/all
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

## companies

### 1. /cities

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/cities
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| filter | Bucaramanga |  |
| fields | name |  |
| page | 1 |  |
| limit | 5 |  |
| sort | name |  |
| order | 1 |  |

### 2. /cities

***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/cities
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| name | Miami |  |

### 3. /cities/:id

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/cities/5bd08db979bbc504c14ebfdd
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Accept-Language | es |  |

### 4. /cities/:id

***Endpoint:***

```bash
Method: PATCH
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/cities/5bd08db979bbc504c14ebfdd
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| name | Seatle2 |  |

### 5. /cities/:id

***Endpoint:***

```bash
Method: DELETE
Type: FORMDATA
URL: https://api-beddopms.pmsconsulting.cl/api/v1/cities/5b38171b1843d58427c5d6c4
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

### 6. /cities/all

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/cities/all
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

## employees

### 1. /employees

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/employees
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| filter | Bucaramanga |  |
| fields | name |  |
| page | 1 |  |
| limit | 5 |  |
| sort | name |  |
| order | 1 |  |

### 2. /employees

***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/employees
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| name | Miami |  |
| rut |  |  |
| sap |  |  |
| management |  |  |
| company |  |  |
| notes |  |  |

### 3. /employees/:id

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/employees/5bd08db979bbc504c14ebfdd
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Accept-Language | es |  |

### 4. /employees/:id

***Endpoint:***

```bash
Method: PATCH
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/employees/5bd08db979bbc504c14ebfdd
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| name | Miami |  |
| rut |  |  |
| sap |  |  |
| management |  |  |
| company |  |  |
| notes |  |  |

### 5. /employees/:id

***Endpoint:***

```bash
Method: DELETE
Type: FORMDATA
URL: https://api-beddopms.pmsconsulting.cl/api/v1/employees/5b38171b1843d58427c5d6c4
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

### 6. /employees/all

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/employees/all
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

## establishments

### 1. /establishments

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/establishments
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| filter | Bucaramanga |  |
| fields | name |  |
| page | 1 |  |
| limit | 5 |  |
| sort | name |  |
| order | 1 |  |

### 2. /establishments

***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/establishments
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| establishment | Miami |  |
| quantityBed |  |  |
| numeration |  |  |

### 3. /establishments/:id

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/establishments/5bd08db979bbc504c14ebfdd
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Accept-Language | es |  |

### 4. /establishments/:id

***Endpoint:***

```bash
Method: PATCH
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/establishments/5bd08db979bbc504c14ebfdd
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| establishment | Miami |  |
| quantityBed |  |  |
| numeration |  |  |

### 5. /establishments/:id

***Endpoint:***

```bash
Method: DELETE
Type: FORMDATA
URL: https://api-beddopms.pmsconsulting.cl/api/v1/establishments/5b38171b1843d58427c5d6c4
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

### 6. /establishments/all

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/establishments/all
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

## managements

### 1. /managements

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/managements
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| filter | Bucaramanga |  |
| fields | name |  |
| page | 1 |  |
| limit | 5 |  |
| sort | name |  |
| order | 1 |  |

### 2. /managements

***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/managements
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| name |  |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| name |  |  |

### 3. /managements/:id

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/managements/5bd08db979bbc504c14ebfdd
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Accept-Language | es |  |

### 4. /managements/:id

***Endpoint:***

```bash
Method: PATCH
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/managements/5bd08db979bbc504c14ebfdd
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| name |  |  |

### 5. /managements/:id

***Endpoint:***

```bash
Method: DELETE
Type: FORMDATA
URL: https://api-beddopms.pmsconsulting.cl/api/v1/managements/5b38171b1843d58427c5d6c4
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

### 6. /managements/all

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/managements/all
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

## users

### 1. /users

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/users
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| filter | ad |  |
| fields | name,email |  |
| page | 1 |  |
| limit | 10 |  |
| sort | name |  |
| order | -1 |  |

### 2. /users

***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://api-beddopms.pmsconsulting.cl/api/v1/users
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| name | New User |  |
| email | myemail@email.com |  |
| password | 12345 |  |
| role | admin |  |
| phone | 123123 |  |
| city | Bucaramamga |  |
| country | Colombia |  |

### 3. /users/:id

***Endpoint:***

```bash
Method: DELETE
Type: FORMDATA
URL: https://api-beddopms.pmsconsulting.cl/api/v1/users/5aab2443ef417d2d19e6c8f2
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

### 4. /users/:id

***Endpoint:***

```bash
Method: GET
Type:
URL: https://api-beddopms.pmsconsulting.cl/api/v1/users/5aa1c2c35ef7a4e97b5e995a
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |

### 5. /users/:id

***Endpoint:***

```bash
Method: PATCH
Type: URLENCODED
URL: http://localhost:3000/users/5aa1c2c35ef7a4e97b5e995a
```

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer {{authToken}} |  |
| Content-Type | application/x-www-form-urlencoded |  |

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| name | New Name |  |
| email | new@email.com |  |
| role | admin |  |
| phone | 12345 |  |
| city | Cali |  |
| country | Colombia |  |

***Available Variables:***

| Key | Value | Type |
| --- | ------|-------------|
| server | https://api-beddopms.pmsconsulting.cl/api/v1 |  |
| server_dev | http://localhost:3030/api/v1 |  |

***

[Back to top](#beddopms)

> Made with ♥ by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2021-02-12 01:35:59 by [docgen](https://github.com/thedevsaddam/docgen)
