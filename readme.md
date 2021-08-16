# **E-commerce Api**
## **End points**

 - ## User

| Endpoint   | Method | Parameters            | Error codes | Description                    |
|------------|--------|-----------------------|-------------|--------------------------------|
| /user      | GET    | auth-token header     | 403,200     | Get all users (Admin)          |
| /user/:uid | GET    | auth-token header     | 403,200     | Get single user (Admin)        |
| /user      | POST   | name, email, password | 201         | Add user (Sign Up)             |
| /user/:uid | PUT    | name, email, password | 200, 409    | Update user details (customer) |
| /user/:uid | DELETE |                       |             | Delete user details (customer) |

 - ## Product

| End point    | Method | Parameters                                           | Error code    | Description                   |
|--------------|--------|------------------------------------------------------|---------------|-------------------------------|
| /product     | GET    | query: sort, filter, search                          | 200, 400, 500 | Get all products              |
| /product/:id | GET    |                                                      | 200, 500      | Get single product            |
| /product     | POST   | name, description*, price, quantity, image*, Date*   | 201, 409, 400 | To add new product (Merchant) |
| /product/:id | PUT    | name, description *, price, quantity, image* , Date* | 200, 400      | Update product (Merchant)     |
| /product/:id | DELETE |                                                      | 200           | Delete product (Merchant)     |

 - ## Cart

| End point       | Method | Parameters    | Error code    | Description                                 |
|-----------------|--------|---------------|---------------|---------------------------------------------|
| /cart           | GET    |               | 200, 500      | Get all products from cart                  |
| /cart/:id       | GET    |               | 200, 500      | Get single item from cart                   |
| /cart/user/:uid | POST   | pid, quantity | 201, 409, 400 | Add to cart (Customer)                      |
| /cart/user/:uid | PUT    | pid, quantity | 200, 400      | Update cart (Customer)                      |
| /cart/:id       | DELETE |               | 200           | Delete item from cart                       |
| /cart/user/:id  | GET    |               |               | Get all items of a specific user (Customer) |



---
**NOTE**

\*Required parameters

---