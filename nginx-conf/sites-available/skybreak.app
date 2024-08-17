server {
    listen 443 ssl; # managed by Certbot
    listen [::]:443 ssl ipv6only=on; # managed by Certbot

    server_name skybreak.app www.skybreak.app 46.101.13.49;
	location /sao/ { 
  		proxy_pass https://localhost:8080/;
	} 
	
	root /var/www/sites/skybreak.app/html/personal-website/;
    index index.html index.htm index.nginx-debian.html;

    ssl_certificate /var/www/ssl/skybreak.app/ssl_cert.crt; # managed by Certbot
    ssl_certificate_key /var/www/ssl/skybreak.app/private.key; # managed by Certbot
}

server {

	if ($host = www.skybreak.app) {
        return 301 https://$host$request_uri;
   	} # managed by Certbot


    if ($host = skybreak.app) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = 46.101.13.49) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    listen [::]:80;
    server_name skybreak.app www.skybreak.app 46.101.13.49;

	# Note: The trailing '/' is absolutely required.
	# Now requests sent to /some-path can (and must) be handled by the route / on the proxied server side.
	location /sao/ { 
  		proxy_pass https://localhost:8080/;
	} 

    return 404; # managed by Certbot
}
