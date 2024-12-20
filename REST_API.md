# REST API Frontend Interview Questions

## Basic Questions

1. **What is REST? What are the key principles of RESTful APIs?**  
   REST (Representational State Transfer) is an architectural style for designing networked applications. Key principles:
   - Statelessness
   - Client-Server Separation
   - Uniform Interface
   - Cacheable Responses
   - Layered System

2. **What HTTP methods are commonly used in REST APIs? Explain their purpose.**  
   - `GET`: Retrieve data.
   - `POST`: Create new data.
   - `PUT`: Update/replace existing data.
   - `PATCH`: Partially update data.
   - `DELETE`: Remove data.

3. **What are HTTP status codes? Can you list a few common ones and their meanings?**  
   - `200 OK`: Request successful.
   - `201 Created`: Resource created successfully.
   - `400 Bad Request`: Client-side input error.
   - `401 Unauthorized`: Authentication required.
   - `404 Not Found`: Resource not found.
   - `500 Internal Server Error`: Server-side issue.

4. **What are endpoints in a REST API?**  
   Endpoints are the URLs where resources in a REST API can be accessed. Example: `/api/users` to fetch or manage user data.

5. **How do you handle authentication in REST APIs?**  
   Common methods include:
   - API Keys
   - Bearer Tokens (e.g., JWT)
   - OAuth2


6. **What are CORS and how do they affect API calls in the frontend?**  
   CORS (Cross-Origin Resource Sharing) is a security feature that restricts requests made from one origin to another. The server must explicitly allow cross-origin requests using appropriate headers like `Access-Control-Allow-Origin`.

7. **What is the difference between `PUT` and `PATCH`?**  
   - `PUT` replaces the entire resource with the updated one.
   - `PATCH` modifies specific fields of a resource.


