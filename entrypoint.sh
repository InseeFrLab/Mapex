#!/bin/sh
echo "window._env_['LOCAL'] = '$LOCAL';" >> /usr/share/nginx/html/env-config.js
echo "window._env_['PEARL_API_URL'] = '$PEARL_API_URL';" >> /usr/share/nginx/html/env-config.js
exec "$@"