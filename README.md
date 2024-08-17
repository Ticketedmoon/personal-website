# Personal Website Development

Personal website repository where all files relating to the building /
maintaining of the website will be stored.  
Find the website here at: www.skybreak.app

## Website Hierarchy / Structure

Single page design

> Navigation Menu / Bar  
> About me  
> Personal Projects  
> Links to Github, LinkedIn, Youtube  
> Work Experience and technologies used
> 5 Rules for life  
> Contact me - Steam, Email, Twitter

## Further help & References

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Local Setup
- Node: <= 16.16.0

## Why use Nginx as the Web Server?

- **Load Balancing:** Nginx can act as a load balancer, distributing incoming requests across multiple backend application servers to improve scalability and availability. This helps handle large traffic volumes without overloading a single server.
- **Reverse Proxy:** Nginx can function as a reverse proxy, forwarding client requests to the appropriate backend application server and returning the response back to the client. This abstraction simplifies the client-server architecture.
- **Static Content Serving:** Nginx is highly efficient at serving static content such as images, CSS, and JavaScript files. By offloading this responsibility from the application server, it reduces the load and improves overall performance.
- **SSL/TLS Termination:** Nginx can handle SSL/TLS encryption and decryption, terminating secure connections at the Nginx layer rather than the application server. This reduces the computational load on the backend application.
- **Caching:** Nginx provides caching capabilities, allowing it to cache frequently accessed content and serve it directly without forwarding the request to the application server. This reduces response times and server load.
- **URL Routing:** Nginx can handle URL routing and mapping requests to the appropriate backend services, simplifying the application logic.
Logging and Monitoring: Nginx provides robust logging and monitoring capabilities, making it easier to troubleshoot issues and analyze traffic patterns.

