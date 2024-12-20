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

8. **How do you optimize API calls in a React application?** 

Use caching (e.g., SWR, React Query).
Batch multiple API calls if possible.
Use debounce or throttle for user-triggered events (e.g., search input).
Avoid unnecessary API calls by managing state effectively.
9. **What are query parameters and path parameters? How are they different?**

Query Parameters: Passed in the URL after ? (e.g., /api/users?role=admin).
Path Parameters: Part of the URL structure (e.g., /api/users/{id}).


## Advanced Questions

11. **What is the difference between REST and GraphQL?**  
    REST exposes fixed endpoints for specific resources, while GraphQL allows querying specific fields and relationships, reducing over-fetching and under-fetching of data.

12. **How do you manage pagination in a REST API?**  
    Use query parameters like `page` and `limit`:  
    Example: `/api/users?page=2&limit=10`.  
    The API response should include metadata like `total_pages` or `next`.

13. **How do you secure REST APIs on the frontend?**  
    - Use HTTPS for secure communication.  
    - Include access tokens in headers (e.g., `Authorization: Bearer <token>`).  
    - Sanitize user inputs to prevent injection attacks.  
    - Implement rate-limiting to prevent abuse.

14. **Explain the concept of idempotency in REST APIs. Which HTTP methods are idempotent?**  
    An operation is idempotent if performing it multiple times produces the same result.  
    `GET`, `PUT`, `DELETE`, and `HEAD` are idempotent, while `POST` is not.

15. **How do you handle long-running tasks in a REST API?**  
    Use polling or WebSockets:  
    - **Polling**: The client periodically sends requests to check the status.  
    - **WebSockets**: Use a persistent connection for real-time updates.

16. **How do you handle rate-limiting errors (e.g., 429 Too Many Requests)?**  
    - Respect the `Retry-After` header if provided.  
    - Implement exponential backoff for retries.

17. **What are HATEOAS and how do they relate to REST?**  
    HATEOAS (Hypermedia as the Engine of Application State) is a principle of REST where the server provides links in the response to navigate resources. Example:
    ```json
    {
      "user": {
        "id": 1,
        "name": "John Doe",
        "links": {
          "self": "/api/users/1",
          "orders": "/api/users/1/orders"
        }
      }
    }
    ```

**How do you handle API versioning on the frontend?**

Use versioned endpoints like /api/v1/resource.
Abstract API calls into a service layer to easily switch versions.


**Explain how to upload a file using REST API in a React app.**
Use FormData to send files:

javascript
Copy code
const formData = new FormData();
formData.append('file', selectedFile);

fetch('/api/upload', {
  method: 'POST',
  body: formData,
}).then(response => console.log(response));
