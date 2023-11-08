FROM nginx:alpine
# RUN npm install
# RUN npm audit fix --force
# CMD ["npm", "run", "build"]
COPY ./dist/ /usr/share/nginx/html/
RUN echo 'Doing the will of the Father'
